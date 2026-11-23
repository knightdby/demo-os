// A single bounded canvas covers the research, publications and about sections.
(() => {
  const canvas = document.querySelector('.cosmic-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  const region = canvas.parentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, stars = [], meteors = [];
  let frame = 0, visible = false, previous = 0, nextMeteor = 0;
  let seed = 1729;
  const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  function resize() {
    width = region.clientWidth;
    height = region.clientHeight;
    // Bound backing-store dimensions on long pages and high-DPI screens.
    const scale = Math.min(devicePixelRatio || 1, 1.5, 4096 / Math.max(height, 1));
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    seed = 1729;
    stars = Array.from({length: Math.min(330, Math.round(width * height / 9000))}, () => ({
      x: random() * width, y: random() * height, r: .35 + random() * 1.05,
      alpha: .12 + random() * .47, phase: random() * Math.PI * 2, speed: .2 + random() * .45
    }));
    meteors = [];
    draw(performance.now(), 0);
  }
  function draw(now, delta) {
    context.clearRect(0, 0, width, height);
    const time = now / 1000;
    for (const star of stars) {
      const pulse = reduced.matches ? 1 : .78 + Math.sin(time * star.speed + star.phase) * .22;
      context.fillStyle = `rgba(190,215,240,${star.alpha * pulse})`;
      context.beginPath(); context.arc(star.x, star.y, star.r, 0, Math.PI * 2); context.fill();
    }
    if (!reduced.matches && now > nextMeteor) {
      // Start within the currently visible portion, without following the pointer.
      const top = Math.max(0, -region.getBoundingClientRect().top);
      meteors.push({x: width * (.25 + random() * .7), y: top + 30 + random() * innerHeight * .35, age: 0});
      nextMeteor = now + 7500 + random() * 7000;
    }
    meteors = meteors.filter(meteor => meteor.age < 1.35);
    for (const meteor of meteors) {
      meteor.age += delta;
      const x = meteor.x - meteor.age * 280, y = meteor.y + meteor.age * 170;
      const opacity = Math.sin(Math.min(meteor.age / 1.35, 1) * Math.PI) * .55;
      const gradient = context.createLinearGradient(x, y, x + 105, y - 64);
      gradient.addColorStop(0, `rgba(205,230,255,${opacity})`);
      gradient.addColorStop(1, 'rgba(145,202,238,0)');
      context.strokeStyle = gradient; context.lineWidth = 1.2;
      context.beginPath(); context.moveTo(x, y); context.lineTo(x + 105, y - 64); context.stroke();
    }
  }
  function animate(now) {
    frame = 0;
    if (!visible || document.hidden || reduced.matches) return;
    if (now - previous >= 33) {
      draw(now, Math.min((now - previous) / 1000, .06)); previous = now;
    }
    frame = requestAnimationFrame(animate);
  }
  function synchronize() {
    cancelAnimationFrame(frame); frame = 0; previous = performance.now();
    if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(animate);
    else if (reduced.matches) { meteors = []; draw(performance.now(), 0); }
  }
  new ResizeObserver(resize).observe(region);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; synchronize(); }).observe(region);
  document.addEventListener('visibilitychange', synchronize);
  reduced.addEventListener('change', synchronize);
  resize();
})();

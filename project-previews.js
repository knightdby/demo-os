// Keep OpenNWM's miniature homepage progress display tied to its real video.
(() => {
  const card = document.querySelector('.project-card--opennwm');
  if (!card) return;
  const video = card.querySelector('video');
  const bar = card.querySelector('progress');
  const output = card.querySelector('output');
  const stages = [...card.querySelectorAll('.project-preview-stages > span')];
  const clock = value => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  function update() {
    if (!Number.isFinite(video.duration) || !video.duration) return;
    bar.max = video.duration;
    bar.value = video.currentTime;
    output.textContent = `${clock(video.currentTime)} / ${clock(video.duration)}`;
    const stage = video.currentTime / video.duration < .55 ? 0 : video.currentTime / video.duration < .8 ? 1 : 2;
    stages.forEach((el, i) => el.classList.toggle('active', i === stage));
  }
  video.addEventListener('loadedmetadata', update);
  video.addEventListener('timeupdate', update);
})();

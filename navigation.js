// Accessible mobile navigation and scroll-aware section highlighting.
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('site-nav');
  if (!toggle || !navigation) return;
  const links = [...navigation.querySelectorAll('a')];
  const sections = links.map(link => document.querySelector(link.hash)).filter(Boolean);
  const desktop = matchMedia('(min-width: 761px)');
  let scheduled = false;

  function setMenu(open, restoreFocus = false) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('open', open);
    if (restoreFocus) toggle.focus();
  }
  function updateActive() {
    scheduled = false;
    const line = document.querySelector('.site-header').getBoundingClientRect().height + 100;
    let active = null;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) active = section.id;
    }
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) active = 'about';
    for (const link of links) {
      if (link.hash === '#' + active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  function scheduleUpdate() {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateActive); }
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenu(false);
    if (wasOpen) {
      const target = document.querySelector(link.hash);
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus({preventScroll: true});
      }
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) setMenu(false);
  });
  desktop.addEventListener('change', () => { setMenu(false); scheduleUpdate(); });
  addEventListener('scroll', scheduleUpdate, {passive: true});
  addEventListener('resize', scheduleUpdate, {passive: true});
  addEventListener('hashchange', scheduleUpdate);
  addEventListener('load', scheduleUpdate);
  document.fonts?.ready.then(scheduleUpdate);
  scheduleUpdate();
})();

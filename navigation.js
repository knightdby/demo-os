// Shared navigation for the homepage and the separate publications page.
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  if (!header || !toggle || !nav) return;
  function setMenu(open, focus = false) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (focus) toggle.focus();
  }
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  matchMedia('(min-width: 761px)').addEventListener('change', () => setMenu(false));
  const research = document.getElementById('research');
  const researchLink = nav.querySelector('a[href="#research"]');
  let pending = false;
  function update() {
    pending = false;
    header.classList.toggle('scrolled', scrollY > 20);
    if (research && researchLink) {
      if (research.getBoundingClientRect().top <= header.offsetHeight + 100) researchLink.setAttribute('aria-current', 'location');
      else researchLink.removeAttribute('aria-current');
    }
  }
  addEventListener('scroll', () => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }, {passive: true});
  // Preserve old bookmarks after moving the inline publications into their own page.
  if (research && location.hash === '#publications') location.replace('publications.html');
  if (research && location.hash === '#research-areas') location.replace('#research');
  update();
})();


(function () {
  'use strict';

  /* ── MOBILE MENU ─────────────────────────────────────── */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu   = document.getElementById('mobileMenu');

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
      hamburgerBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  /* ── CAROUSEL ────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const track    = document.getElementById('carouselTrack');
    const outer    = document.getElementById('carouselOuter');
    const prevBtn  = document.getElementById('prevBtn');
    const nextBtn  = document.getElementById('nextBtn');
    const dotsWrap = document.getElementById('carouselIndicators');
    if (!track || !outer || !prevBtn || !nextBtn || !dotsWrap) return;

    const cards = Array.from(track.querySelectorAll('.profile-card'));
    const GAP   = 20;
    let idx       = 0;
    let autoTimer = null;

    function cpv() {
      const w = window.innerWidth;
      if (w >= 1100) return 4;
      if (w >= 800)  return 3;
      if (w >= 560)  return 2;
      return 1;
    }
    function groups() { return Math.max(1, Math.ceil(cards.length / cpv())); }
    function cardW()  { return cards[0] ? cards[0].offsetWidth : 260; }

    function buildDots() {
      dotsWrap.innerHTML = '';
      const g = groups();
      for (let i = 0; i < g; i++) {
        const d = document.createElement('button');
        d.className = 'carousel-dot' + (i === idx ? ' active' : '');
        d.setAttribute('aria-label', 'Page ' + (i + 1));
        d.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(d);
      }
    }

    function syncDots() {
      dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });
    }

    function goTo(i) {
      const g = groups();
      idx = ((i % g) + g) % g;
      const offset = idx * cpv() * (cardW() + GAP);
      track.style.transform = 'translateX(-' + offset + 'px)';
      syncDots();
    }

    function next() { goTo(idx + 1); }
    function prev() { goTo(idx - 1); }
    function startAuto() { stopAuto(); autoTimer = setInterval(next, 3500); }
    function stopAuto()  { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

    nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
    prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });

    outer.addEventListener('mouseenter', stopAuto);
    outer.addEventListener('mouseleave', startAuto);

    let tx = 0;
    track.addEventListener('touchstart', e => { tx = e.changedTouches[0].screenX; stopAuto(); }, { passive: true });
    track.addEventListener('touchend',   e => {
      const d = tx - e.changedTouches[0].screenX;
      if (Math.abs(d) > 40) d > 0 ? next() : prev();
      startAuto();
    }, { passive: true });

    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { stopAuto(); next(); startAuto(); }
      if (e.key === 'ArrowLeft')  { stopAuto(); prev(); startAuto(); }
    });

    let resizeT;
    window.addEventListener('resize', () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(() => { buildDots(); goTo(0); }, 220);
    });

    buildDots();
    goTo(0);
    startAuto();
  });

}());

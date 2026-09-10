/* Flisz Roland E.V. — "Műhelyrend" viselkedés
   - Szignatúra: "húzd a szalagot" (kék vonal + sorban ráhulló címkék)
   - Szekciócímek reveal-je görgetésre
   Minden mozgás kikapcsol prefers-reduced-motion esetén.               */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. Szalag-vonal a hero tetején ---- */
  var board = document.querySelector('.board');
  if (board) {
    var tape = document.createElement('span');
    tape.className = 'board__tapeline';
    tape.setAttribute('aria-hidden', 'true');
    board.appendChild(tape);
    // egy tick késleltetés, hogy a transition elinduljon
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { board.classList.add('is-live'); });
    });
  }

  /* ---- 2. Reveal görgetésre: csak a szekciócímek + a promó ---- */
  var revealTargets = document.querySelectorAll('.section__head');
  if (reduce || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---- 3. Mobil menü: hamburger nyit/zár ---- */
  var line = document.querySelector('.clothesline');
  var toggle = line && line.querySelector('.clothesline__toggle');
  var menu = line && line.querySelector('.clothesline__menu');
  if (line && toggle && menu) {
    var setOpen = function (open) {
      line.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
    };
    toggle.addEventListener('click', function () {
      setOpen(!line.classList.contains('is-open'));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('.peg-tag')) { setOpen(false); }
    });
    document.addEventListener('click', function (e) {
      if (line.classList.contains('is-open') && !line.contains(e.target)) { setOpen(false); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && line.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

})();

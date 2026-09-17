/* ==========================================================================
   Arcus Mons AI Systems — site behaviour
   Progressive enhancement only: every feature below is optional, and the
   page reads and works correctly with JavaScript disabled.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     1. Mobile navigation
     ------------------------------------------------------------------ */
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    var setNav = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after choosing a destination.
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setNav(false);
      }
    });

    // Close on Escape, returning focus to the button.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });

    // Close on click outside the header.
    document.addEventListener('click', function (event) {
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      if (!event.target.closest('.site-header')) {
        setNav(false);
      }
    });

    // Reset when the desktop layout takes over, so the panel can never be
    // left in an "open" state that the wide layout does not use.
    var wide = window.matchMedia('(min-width: 1001px)');
    var onWide = function (event) {
      if (event.matches) setNav(false);
    };
    if (typeof wide.addEventListener === 'function') {
      wide.addEventListener('change', onWide);
    } else if (typeof wide.addListener === 'function') {
      wide.addListener(onWide); // Safari < 14
    }
  }

  /* ------------------------------------------------------------------
     2. Header shadow + back-to-top visibility
     ------------------------------------------------------------------ */
  var header = document.getElementById('site-header');
  var toTop = document.getElementById('to-top');

  var onScroll = function () {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (toTop) toTop.classList.toggle('is-visible', y > 700);
  };

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScroll();
      ticking = false;
    });
  }, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ------------------------------------------------------------------
     3. Scroll reveal
     ------------------------------------------------------------------ */
  var revealables = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) || reduceMotion) {
    // No observer support, or the visitor asked for less motion: show everything.
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add('is-in');
    });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.06 });

    Array.prototype.forEach.call(revealables, function (el) {
      revealObserver.observe(el);
    });
  }

  /* ------------------------------------------------------------------
     4. Scrollspy — highlight the section currently in view
     ------------------------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.nav-list a[href^="#"]')
  );

  if (navLinks.length && 'IntersectionObserver' in window) {
    var linkFor = {};
    var sections = [];

    navLinks.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = id && document.getElementById(id);
      if (section) {
        linkFor[id] = link;
        sections.push(section);
      }
    });

    var visible = {};

    var syncActive = function () {
      // The topmost visible section wins, so the highlight never jumps
      // backwards while scrolling down through overlapping sections.
      var best = null;
      var bestTop = Infinity;

      sections.forEach(function (section) {
        if (!visible[section.id]) return;
        var top = section.getBoundingClientRect().top;
        if (top < bestTop) {
          bestTop = top;
          best = section.id;
        }
      });

      navLinks.forEach(function (link) { link.classList.remove('is-active'); });
      if (best && linkFor[best]) {
        linkFor[best].classList.add('is-active');
      }
    };

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting;
      });
      syncActive();
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    sections.forEach(function (section) { spy.observe(section); });
  }
})();

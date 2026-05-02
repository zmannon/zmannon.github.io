/* Zach Mannon — main.js */

(function () {
  'use strict';

  // === Mobile nav toggle ===
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // === Active nav link ===
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  const currentFile = currentPath.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = (link.getAttribute('href') || '').replace(/\/$/, '');
    const hrefFile = href.split('/').pop() || 'index.html';
    if (
      hrefFile === currentFile ||
      (currentFile === '' && hrefFile === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  // === FAQ accordion ===
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-item__question');
    if (!question) return;

    question.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(function (i) { i.classList.remove('open'); });
      // Toggle this one
      if (!isOpen) { item.classList.add('open'); }
    });
  });

  // === Smooth scroll for anchor links ===
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();

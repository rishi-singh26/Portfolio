// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });

  // GSAP-powered interactions & scroll reveals
  if (!prefersReducedMotion && window.gsap) {
    gsap.registerPlugin(ScrollTrigger);

    // scroll reveal for cards and sections
    gsap.utils.toArray('.card').forEach(card => {
      gsap.from(card, {
        y: 40, opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    // social icon hover micro-interactions
    document.querySelectorAll('.social-link').forEach(link => {
      const img = link.querySelector('.social-image');
      if (!img) return;
      link.addEventListener('mouseenter', () => gsap.to(img, { scale: 1.12, duration: 0.22, ease: 'power1.out' }));
      link.addEventListener('mouseleave', () => gsap.to(img, { scale: 1, duration: 0.32, ease: 'power1.out' }));
    });

    // subtle parallax for hero header based on mouse position
    const hero = document.querySelector('.hero');
    hero?.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to('.hero .btn', { x: x * 8, y: y * 6, duration: 0.8, ease: 'power3.out' });
    });
    hero?.addEventListener('mouseleave', () => gsap.to('.hero .hero-header', { x: 0, y: 0, duration: 0.8, ease: 'power3.out' }));

  } else {
    // Reduced motion fallback: make sure everything is visible and interactive
    document.querySelectorAll('.card, .hero .hero-header, .social-links-row .social-link, .btn, .header .logo, .header .header-email').forEach(el => {
      el.style.opacity = 1;
      el.style.transform = 'none';
    });
  }
});
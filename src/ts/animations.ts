import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from './utils';

gsap.registerPlugin(ScrollTrigger);

/** Hero entrance animation */
export function initHeroAnimation(): void {
  if (prefersReducedMotion()) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('#hero-headline',     { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
    .fromTo('#hero-description',  { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
    .fromTo('#hero-ctas',         { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo('#hero-photo',        { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, '-=0.7')
    .fromTo('#hero-badges .hero-badge',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
      '-=0.5',
    );
}

/** Scroll-triggered reveal for section titles and cards */
export function initScrollReveals(): void {
  if (prefersReducedMotion()) return;

  const makeReveal = (selector: string, vars: gsap.TweenVars) => {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      gsap.fromTo(el, vars,
        {
          ...Object.fromEntries(Object.entries(vars).map(([k]) => [k, k === 'opacity' ? 1 : 0])),
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        },
      );
    });
  };

  // Section titles
  document.querySelectorAll<HTMLElement>('.section-title').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.65, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      },
    );
  });

  // Cards / timeline items / experience items
  document.querySelectorAll<HTMLElement>(
    '.project-card, .timeline-item, .experience-item, .skill-card, .paper-item'
  ).forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
        delay: (i % 3) * 0.07,
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
      },
    );
  });
}

/** Glassmorphism navbar on scroll */
export function initNavbarScroll(): void {
  const navbar = document.querySelector<HTMLElement>('#navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, { passive: true });
}

/** 3-D tilt effect on project cards */
export function initTilt(): void {
  if (prefersReducedMotion()) return;

  document.querySelectorAll<HTMLElement>('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 14,
        rotateX: -y * 14,
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
        transformPerspective: 800,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power3.out',
      });
    });
  });
}

/** Filter / shuffle project cards */
export function shuffleProjects(activeCategory: string): void {
  const cards = document.querySelectorAll<HTMLElement>('.project-card');

  if (prefersReducedMotion()) {
    cards.forEach((card) => {
      const cat = card.dataset['category'] ?? '';
      card.style.display = (activeCategory === 'All' || cat === activeCategory) ? '' : 'none';
    });
    return;
  }

  cards.forEach((card) => {
    const cat = card.dataset['category'] ?? '';
    const visible = activeCategory === 'All' || cat === activeCategory;

    if (!visible) {
      gsap.to(card, {
        scale: 0.85,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => { card.style.display = 'none'; },
      });
    } else {
      card.style.display = '';
      gsap.fromTo(card,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.35, ease: 'power2.out' },
      );
    }
  });
}

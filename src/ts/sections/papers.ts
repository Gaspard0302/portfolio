import gsap from 'gsap';
import { PAPERS } from '../data';
import { qs, el, parseMarkdown } from '../utils';

export function initPapers(): void {
  const list = qs<HTMLElement>('#papers-list');
  if (!list) return;

  PAPERS.forEach((paper) => {
    const bodyId = `paper-body-${paper.title.replace(/\s+/g, '-').toLowerCase()}`;
    const item = el<HTMLElement>('div', { class: 'paper-item glass-card' });

    item.innerHTML = `
      <button
        class="accordion-trigger"
        aria-expanded="false"
        aria-controls="${bodyId}"
        type="button"
      >
        <div class="accordion-title-wrap">
          <span aria-hidden="true">📄</span>
          <span class="accordion-title">${paper.title}</span>
        </div>
        <div class="accordion-controls">
          <a
            href="${paper.link}"
            target="_blank"
            rel="noopener noreferrer"
            class="arxiv-link"
            aria-label="Read ${paper.title} on arXiv (opens in new tab)"
          >arXiv ↗</a>
          <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <polyline points="6,9 12,15 18,9"/>
          </svg>
        </div>
      </button>
      <div id="${bodyId}" class="accordion-body" role="region" aria-labelledby="${bodyId}-trigger">
        <div class="accordion-content">
          ${parseMarkdown(paper.thoughts)}
        </div>
      </div>
    `;

    list.appendChild(item);

    // Wire accordion
    const trigger = item.querySelector<HTMLButtonElement>('.accordion-trigger');
    const body = item.querySelector<HTMLElement>('.accordion-body');
    const icon = item.querySelector<SVGElement>('.accordion-icon');

    if (!trigger || !body || !icon) return;

    // Prevent arxiv link from toggling accordion
    const arxivLink = item.querySelector<HTMLAnchorElement>('.arxiv-link');
    arxivLink?.addEventListener('click', (e) => e.stopPropagation());

    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other open panels
      document.querySelectorAll<HTMLButtonElement>('.accordion-trigger[aria-expanded="true"]').forEach((t) => {
        if (t === trigger) return;
        const otherItem = t.closest('.paper-item');
        if (!otherItem) return;
        const otherBody = otherItem.querySelector<HTMLElement>('.accordion-body');
        const otherIcon = otherItem.querySelector<SVGElement>('.accordion-icon');
        t.setAttribute('aria-expanded', 'false');
        if (otherBody) gsap.to(otherBody, { height: 0, duration: 0.3, ease: 'power2.inOut' });
        if (otherIcon) gsap.to(otherIcon, { rotation: 0, duration: 0.3 });
      });

      // Toggle this panel
      if (isOpen) {
        trigger.setAttribute('aria-expanded', 'false');
        gsap.to(body, { height: 0, duration: 0.3, ease: 'power2.inOut' });
        gsap.to(icon, { rotation: 0, duration: 0.3 });
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        gsap.to(body, { height: 'auto', duration: 0.4, ease: 'power2.out' });
        gsap.to(icon, { rotation: 180, duration: 0.3 });
      }
    });
  });
}

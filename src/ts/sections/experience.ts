import { EXPERIENCE } from '../data';
import { qs, el } from '../utils';

export function initExperience(): void {
  const list = qs<HTMLElement>('#experience-list');
  if (!list) return;

  for (const raw of EXPERIENCE) {
    const text = raw.replace(/^✔️\s*/, '');
    const item = el<HTMLElement>('li', { class: 'experience-item glass-card' });

    item.innerHTML = `
      <span class="experience-check" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </span>
      <span class="experience-text">${text}</span>
    `;

    list.appendChild(item);
  }
}

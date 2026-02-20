import { SKILLS } from '../data';
import { qs, el } from '../utils';

export function initSkills(): void {
  const grid = qs<HTMLElement>('#skills-grid');
  if (!grid) return;

  for (const [category, items] of Object.entries(SKILLS)) {
    const card = el<HTMLElement>('div', { class: 'skill-card glass-card' });

    const tags = items
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map((tag) => `<span class="skill-tag">${tag}</span>`)
      .join('');

    card.innerHTML = `
      <p class="skill-category">${category}</p>
      <div class="skill-tags">${tags}</div>
    `;

    grid.appendChild(card);
  }
}

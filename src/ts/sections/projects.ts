import { PROJECTS, type ProjectCategory } from '../data';
import { qs, el } from '../utils';
import { shuffleProjects, initTilt } from '../animations';

export function initProjects(): void {
  const grid = qs<HTMLElement>('#projects-grid');
  if (!grid) return;

  // Build project cards
  for (const project of PROJECTS) {
    const card = el<HTMLElement>('article', {
      class: 'project-card glass-card',
      'data-category': project.category,
      role: 'listitem',
    });

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="Visit ${project.title} (opens in new tab)">Visit project ↗</a>` : ''}
    `;

    grid.appendChild(card);
  }

  // Wire filter buttons
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
  let activeCategory = 'All';

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset['filter'] as ProjectCategory | 'All';
      if (cat === activeCategory) return;
      activeCategory = cat;

      // Update aria-selected and active class
      buttons.forEach((b) => {
        const isThis = b === btn;
        b.setAttribute('aria-selected', String(isThis));
        b.classList.toggle('filter-active', isThis);
      });

      shuffleProjects(activeCategory);
    });
  });

  // Init 3D tilt after cards are in DOM
  initTilt();
}

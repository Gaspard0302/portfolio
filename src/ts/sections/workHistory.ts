import { WORK_HISTORY } from '../data';
import { qs, el } from '../utils';

export function initWorkHistory(): void {
  const timeline = qs<HTMLElement>('#work-timeline');
  if (!timeline) return;

  WORK_HISTORY.forEach((job, i) => {
    const isLast = i === WORK_HISTORY.length - 1;
    const item = el<HTMLElement>('div', { class: 'timeline-item' });

    const detailsHtml = job.details
      .map(
        (d) =>
          `<li class="work-detail-item">
             <span class="work-bullet" aria-hidden="true">›</span>
             <span>${d}</span>
           </li>`,
      )
      .join('');

    item.innerHTML = `
      <div class="timeline-dot" aria-hidden="true"></div>
      ${!isLast ? '<div class="timeline-line" aria-hidden="true"></div>' : ''}
      <div class="timeline-card glass-card">
        <div class="timeline-header">
          <div>
            <p class="timeline-title">${job.role}</p>
            <p class="timeline-subtitle">${job.company}</p>
          </div>
          <span class="timeline-period">${job.period}</span>
        </div>
        <ul class="work-detail-list" aria-label="Job responsibilities">${detailsHtml}</ul>
      </div>
    `;

    timeline.appendChild(item);
  });
}

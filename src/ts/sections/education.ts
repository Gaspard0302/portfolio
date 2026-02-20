import { EDUCATION } from '../data';
import { qs, el } from '../utils';

export function initEducation(): void {
  const timeline = qs<HTMLElement>('#education-timeline');
  if (!timeline) return;

  EDUCATION.forEach((edu, i) => {
    const isLast = i === EDUCATION.length - 1;
    const item = el<HTMLElement>('div', { class: 'timeline-item' });

    const rp = edu.researchPaper;
    const researchHtml = rp
      ? `<div class="research-box">
           <p class="research-label">Research Paper</p>
           <p class="research-title">${rp.title}</p>
           <p class="research-desc">${rp.description}</p>
           <a href="/assets/${rp.file}" download class="research-link">
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
               <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
               <polyline points="7,10 12,15 17,10"/>
               <line x1="12" y1="15" x2="12" y2="3"/>
             </svg>
             Download Paper
           </a>
         </div>`
      : '';

    item.innerHTML = `
      <div class="timeline-dot" aria-hidden="true"></div>
      ${!isLast ? '<div class="timeline-line" aria-hidden="true"></div>' : ''}
      <div class="timeline-card glass-card">
        <div class="timeline-header">
          <div>
            <p class="timeline-title">${edu.school}</p>
            <p class="timeline-subtitle">${edu.degree}</p>
          </div>
          <span class="timeline-period">${edu.year}</span>
        </div>
        <p class="timeline-desc">${edu.description}</p>
        ${edu.courses ? `<p class="timeline-courses">Courses: ${edu.courses}</p>` : ''}
        ${researchHtml}
      </div>
    `;

    timeline.appendChild(item);
  });
}

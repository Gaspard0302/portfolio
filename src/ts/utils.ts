/** Query selector shorthand */
export function qs<T extends Element = Element>(
  selector: string,
  parent: ParentNode = document,
): T | null {
  return parent.querySelector<T>(selector);
}

/** Create an element with attributes */
export function el<T extends HTMLElement = HTMLElement>(
  tag: string,
  attrs: Record<string, string> = {},
): T {
  const element = document.createElement(tag) as T;
  for (const [key, value] of Object.entries(attrs)) {
    element.setAttribute(key, value);
  }
  return element;
}

/** Minimal markdown → HTML converter */
export function parseMarkdown(md: string): string {
  const lines = md.split('\n');
  const output: string[] = [];
  let inList = false;

  for (const rawLine of lines) {
    let line = rawLine;

    // Headings
    if (line.startsWith('### ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const text = applyInline(line.slice(4));
      output.push(`<h5 class="accordion-h5">${text}</h5>`);
      continue;
    }
    if (line.startsWith('## ')) {
      if (inList) { output.push('</ul>'); inList = false; }
      const text = applyInline(line.slice(3));
      output.push(`<h4 class="accordion-h5">${text}</h4>`);
      continue;
    }

    // List items
    if (line.startsWith('- ') || line.startsWith('  - ')) {
      const text = applyInline(line.replace(/^\s*- /, ''));
      if (!inList) { output.push('<ul>'); inList = true; }
      output.push(`<li>${text}</li>`);
      continue;
    }

    // Close list on non-list line
    if (inList && line.trim() !== '') {
      output.push('</ul>');
      inList = false;
    }

    // Blank line → paragraph break
    if (line.trim() === '') {
      if (!inList) output.push('</p><p class="accordion-p">');
      continue;
    }

    output.push(applyInline(line));
  }

  if (inList) output.push('</ul>');

  const raw = output.join('\n');
  return `<p class="accordion-p">${raw}</p>`
    .replace(/<p class="accordion-p"><\/p>/g, '')
    .replace(/<\/p>\s*<p class="accordion-p">\s*<\/p>/g, '</p>')
    .replace(/<p class="accordion-p">\s*(<h[45])/g, '$1')
    .replace(/(<\/h[45]>)\s*<\/p>/g, '$1')
    .replace(/<p class="accordion-p">\s*(<ul>)/g, '$1')
    .replace(/(<\/ul>)\s*<\/p>/g, '$1');
}

function applyInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/** Returns true if the user prefers reduced motion */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

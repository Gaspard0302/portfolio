import { EMAIL } from '../data';
import { qs } from '../utils';

function showToast(message: string, type: 'success' | 'error' = 'success'): void {
  const toast = qs<HTMLElement>('#toast');
  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast-visible toast-${type}`;

  setTimeout(() => {
    toast.className = '';
    toast.textContent = '';
  }, 4500);
}

function validateField(
  input: HTMLInputElement | HTMLTextAreaElement,
): boolean {
  const errorEl = document.getElementById(`${input.id}-error`);
  const value = input.value.trim();

  let errorMsg = '';

  if (!value) {
    errorMsg = `${input.name} is required.`;
  } else if (
    input instanceof HTMLInputElement &&
    input.type === 'email' &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  ) {
    errorMsg = 'Please enter a valid email address.';
  }

  const hasError = errorMsg !== '';
  input.classList.toggle('input-error', hasError);

  if (errorEl) {
    errorEl.textContent = errorMsg;
    if (hasError) {
      errorEl.removeAttribute('hidden');
    } else {
      errorEl.setAttribute('hidden', '');
    }
  }

  return !hasError;
}

export function initContact(): void {
  const form = qs<HTMLFormElement>('#contact-form');
  if (!form) return;

  const nameInput = qs<HTMLInputElement>('#contact-name', form);
  const emailInput = qs<HTMLInputElement>('#contact-email', form);
  const messageInput = qs<HTMLTextAreaElement>('#contact-message', form);

  if (!nameInput || !emailInput || !messageInput) return;

  const fields: (HTMLInputElement | HTMLTextAreaElement)[] = [nameInput, emailInput, messageInput];

  // Real-time validation
  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('input-error')) validateField(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const allValid = fields.every((f) => validateField(f));
    if (!allValid) return;

    const subject = encodeURIComponent(`Portfolio contact from ${nameInput.value}`);
    const body = encodeURIComponent(
      `Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nMessage:\n${messageInput.value}`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    showToast('Message ready! Opening your email client...', 'success');
    form.reset();
    fields.forEach((f) => f.classList.remove('input-error'));
  });
}

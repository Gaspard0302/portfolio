type ChatMessage = { role: 'user' | 'assistant'; content: string };

const MAX_HISTORY = 10;

let messages: ChatMessage[] = [];

function appendMessage(role: 'user' | 'assistant' | 'error', text: string): void {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble chat-${role === 'error' ? 'bot chat-error' : role}`;
  bubble.textContent = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
}

function showTyping(): HTMLElement {
  const container = document.getElementById('chat-messages');
  const dots = document.createElement('div');
  dots.className = 'chat-bubble chat-bot typing-indicator';
  dots.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
  container?.appendChild(dots);
  container!.scrollTop = container!.scrollHeight;
  return dots;
}

async function sendMessage(): Promise<void> {
  const input = document.getElementById('chat-input') as HTMLInputElement | null;
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  input.disabled = true;
  const sendBtn = document.getElementById('chat-send') as HTMLButtonElement | null;
  if (sendBtn) sendBtn.disabled = true;

  appendMessage('user', text);
  messages.push({ role: 'user', content: text });

  // Keep history bounded
  if (messages.length > MAX_HISTORY * 2) {
    messages = messages.slice(-MAX_HISTORY * 2);
  }

  const typingEl = showTyping();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });

    typingEl.remove();

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = (await res.json()) as { reply: string };
    appendMessage('assistant', data.reply);
    messages.push({ role: 'assistant', content: data.reply });
  } catch {
    typingEl.remove();
    appendMessage('error', 'Sorry, something went wrong. Please try again.');
  } finally {
    input.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    input.focus();
  }
}

export function initChatbot(): void {
  const btn = document.getElementById('chatbot-btn');
  const panel = document.getElementById('chatbot-panel');
  const closeBtn = document.getElementById('chatbot-close');
  const sendBtn = document.getElementById('chat-send');
  const input = document.getElementById('chat-input') as HTMLInputElement | null;

  if (!btn || !panel) return;

  function openPanel(): void {
    panel!.removeAttribute('hidden');
    btn!.setAttribute('aria-expanded', 'true');
    input?.focus();

    // Show welcome message once
    const container = document.getElementById('chat-messages');
    if (container && container.children.length === 0) {
      appendMessage('assistant', "Hi! I'm Buddy, Gaspard's AI assistant. Ask me anything about his background, projects, or experience!");
    }
  }

  function closePanel(): void {
    panel!.setAttribute('hidden', '');
    btn!.setAttribute('aria-expanded', 'false');
    btn!.focus();
  }

  btn.addEventListener('click', () => {
    const isOpen = !panel.hasAttribute('hidden');
    if (isOpen) closePanel(); else openPanel();
  });

  closeBtn?.addEventListener('click', closePanel);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hasAttribute('hidden')) closePanel();
  });

  sendBtn?.addEventListener('click', () => void sendMessage());

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  });
}

import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/bfed4281-9a12-4a3d-93b4-e76021d22524/chat',
  mode: 'window',
  loadPreviousSession: false,
  showWelcomeScreen: false,
  initialMessages: [
    'Hello. I am the JS-SEZ advisor.',
    'Ask me a question about the Johor-Singapore Special Economic Zone.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: '',
      footer: '',
      getStarted: 'New conversation',
      inputPlaceholder: 'Type your JS-SEZ question...',
      closeButtonTooltip: 'Close chat'
    }
  }
});

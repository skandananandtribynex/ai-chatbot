const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const input = document.getElementById('message-input');

const history = [];

function addMessage(role, text) {
  const messageElement = document.createElement('div');
  messageElement.className = `message ${role}`;
  messageElement.textContent = text;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage(message) {
  addMessage('user', message);
  input.value = '';

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
    });

    const data = await response.json();
    const reply = data.reply || 'Sorry, I did not receive a response.';
    addMessage('bot', reply);
    history.push({ role: 'user', content: message });
    history.push({ role: 'assistant', content: reply });
  } catch (error) {
    addMessage('bot', 'Something went wrong while contacting the chatbot service.');
  }
}

chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = input.value.trim();

  if (!message) {
    return;
  }

  await sendMessage(message);
});

addMessage('bot', 'Hello! I am your AI chatbot. Ask me anything.');

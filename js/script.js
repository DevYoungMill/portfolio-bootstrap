// Add custom JavaScript here
const runTypingEffect = function () {
  const text = 'I am DevYoungMill';
  const typingEl = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingEl, typingDelay);
};

const typeText = function (text, typingEl, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingEl.textContent += text.charAt(i);
    }, delay * i);
  }
};

document.addEventListener('DOMContentLoaded', runTypingEffect);

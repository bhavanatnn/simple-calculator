// Simple calculator logic
const displayEl = document.getElementById('display');
const keys = document.querySelector('.keys');

let current = '';
let lastResult = null;

function updateDisplay(value) {
  displayEl.textContent = value === '' ? '0' : value;
}

function appendValue(v) {
  // Prevent multiple leading zeros
  if (current === '0' && v === '0') return;
  // Replace leading zero with decimal or non-zero digit
  if (current === '0' && v !== '.' ) current = '';
  // Prevent multiple dots in current number segment
  if (v === '.') {
    // find last operator
    const parts = current.split(/[\+\-\*\/]/);
    const last = parts[parts.length - 1];
    if (last.includes('.')) return;
  }
  current += v;
  updateDisplay(current);
}

function clearAll() {
  current = '';
  lastResult = null;
  updateDisplay('0');
}

function backspace() {
  current = current.slice(0, -1);
  updateDisplay(current);
}

function applyPercent() {
  // convert current expression to number and divide by 100 if it's a single number
  try {
    if (current === '') return;
    // If there's any operator, treat % as divide last number by 100
    if (/[\+\-\*\/]/.test(current)) {
      // find last number and replace it with its percent
      const match = current.match(/(.*?)([0-9.]+)$/);
      if (match) {
        const before = match[1];
        const num = parseFloat(match[2]);
        current = before + (num / 100);
      }
    } else {
      current = String(parseFloat(current) / 100);
    }
    updateDisplay(current);
  } catch (_) {}
}

function evaluateExpression() {
  if (!current) return;
  // Replace × and ÷ symbols if any (we used * and / in data-value, but keep safe)
  const expr = current.replace(/×/g, '*').replace(/÷/g, '/');
  try {
    // Use Function to evaluate safely in this small local app
    // Note: Avoid evaluating untrusted input in production
    const result = Function('"use strict"; return (' + expr + ')')();
    lastResult = result;
    current = String(result);
    updateDisplay(current);
  } catch (err) {
    updateDisplay('Error');
    current = '';
  }
}

// Button clicks
keys.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  const action = btn.dataset.action;
  const value = btn.dataset.value;

  if (action === 'clear') clearAll();
  else if (action === 'back') backspace();
  else if (action === 'percent') applyPercent();
  else if (action === 'equals') evaluateExpression();
  else if (value) appendValue(value);
});

// Keyboard support (basic)
window.addEventListener('keydown', (e) => {
  const allowed = '0123456789.+-*/';
  if (allowed.includes(e.key)) {
    e.preventDefault();
    appendValue(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    evaluateExpression();
  } else if (e.key === 'Backspace') {
    e.preventDefault();
    backspace();
  } else if (e.key.toLowerCase() === 'c') {
    e.preventDefault();
    clearAll();
  } else if (e.key === '%') {
    e.preventDefault();
    applyPercent();
  }
});

// initialize
clearAll();
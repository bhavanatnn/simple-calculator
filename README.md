# Simple Calculator (HTML · CSS · JavaScript)

A minimal, responsive calculator built with plain HTML, CSS, and JavaScript. It demonstrates basic arithmetic operations, a clean UI, keyboard support, and easy customization — perfect for beginners learning DOM manipulation and event handling.

---

## Demo
Open `index.html` in your browser (double-click or serve with a static server) to try the calculator locally.

---

## Features
- Basic arithmetic: addition, subtraction, multiplication, division
- Clear (C) and Delete (⌫) actions
- Decimal input support
- Keyboard input support (numbers, `+ - * /`, Enter for equals, Backspace, Delete)
- Responsive layout that works on mobile and desktop
- Simple, easy-to-read code suitable for learning

---

## Technologies
- HTML5
- CSS3 (Flexbox / Grid)
- Vanilla JavaScript (ES6)

---

## Getting started

### Prerequisites
A modern web browser (Chrome, Firefox, Edge, Safari) — no additional tools required.

### Installation / Run locally
1. Clone or download the project files to a folder.
2. Open `index.html` in your browser:
   - Double-click the file, or
   - From a terminal in the project folder run a simple HTTP server (optional):
     - Python 3: `python -m http.server 8000`
     - Node (http-server): `npx http-server .`
   - Visit `http://localhost:8000` (if using a server).

---

## Usage
- Click the number buttons to enter values.
- Use `+`, `-`, `×`, `÷` to choose operators.
- Click `=` or press Enter to evaluate.
- Click `C` to clear all, or `⌫` (Backspace) to delete the last digit.
- Decimal point `.` supported — input validation prevents multiple decimals in one number.

---

## Suggested File Structure
- index.html        — main HTML file
- styles.css        — styling and responsive layout
- script.js         — calculator logic and event handling
- README.md         — this file
- assets/           — optional icons / images

Example:
```
/simple-calculator
├─ index.html
├─ styles.css
├─ script.js
├─ README.md
└─ assets/
```

---

## Customization ideas
- Add keyboard shortcuts for scientific functions or memory (M+, M-, MR).
- Add animations or theme toggles (light/dark).
- Extend to a scientific calculator (sin, cos, tan, exponent).
- Persist last result in localStorage.

CSS variables example (in `:root`) you can add to `styles.css`:
```css
:root {
  --bg: #f4f4f8;
  --panel: #ffffff;
  --accent: #4f46e5;
  --text: #111827;
}
```

---

## Accessibility notes
- Use semantic buttons and ARIA labels for non-text controls.
- Ensure focus styles are visible for keyboard users.
- Provide sufficient color contrast for numbers and buttons.

---

## Tests / Validation
- Manually test operations with various inputs including:
  - Multiple decimal entries (disallowed)
  - Division by zero (handle gracefully)
  - Long numbers (clamp display or use scientific notation)
- Test keyboard input and mobile touch behavior.

---

## Contributing
Contributions are welcome. Suggestions:
- Open issues for bugs or feature requests.
- Submit PRs with a clear description and tests where relevant.

---

## License
This project is available under the MIT License. See LICENSE file for details.

---

## Author / Contact
Created by bhavanatnn

If you want help implementing additional features (history, memory, themes), tell me what you'd like and I can provide the code snippets or full files.
````

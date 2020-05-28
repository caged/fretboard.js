import '../styles/style.scss';
import '../../node_modules/prismjs/themes/prism-solarizedlight.css';
import './navbar.js';
import './documentation.js';

import home from './home.js';
import modes from './modes.js';
import boxes from './boxes.js';
import tetrachords from './tetrachords.js';

document.addEventListener('DOMContentLoaded', () => {
  switch (document.documentElement.dataset.section) {
    case 'home':
      return home();
    case 'modes':
      return modes();
    case 'boxes':
      return boxes();
    case 'tetrachords':
      return tetrachords();
  }
});

import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';

// Load home page when website is first loaded
loadHome();

const content = document.querySelector('#content');
const nav = document.querySelector('nav');
nav.addEventListener('click', (e) => {
    content.replaceChildren();
    switch (e.target.textContent) {
        case 'HOME':
            loadHome();
            return;
        case 'MENU':
            loadMenu();
            return;
        case 'CONTACT':
            return;
    }
});

import sushiPath1 from '../images/makizushi.jpg';
import sushiPath2 from '../images/inarizushi.jpg';
import sushiPath3 from '../images/nigirizushi.jpg';
import sushiPath4 from '../images/oshizushi.jpg';

function createMenuCard(imgSrc, name, price) {
    const card = document.createElement('div');
    card.classList = 'card';
    const h3 = document.createElement('h3');
    h3.textContent = `${name} - \$${price.toFixed(2)}`;
    const img = document.createElement('img');
    img.src = imgSrc;
    card.appendChild(img);
    card.appendChild(h3);
    return card;
}

export function loadMenu() {
    const menu = document.createElement('div');
    menu.classList = 'menu';
    menu.appendChild(createMenuCard(sushiPath1, 'Makizushi', 5.0));
    menu.appendChild(createMenuCard(sushiPath2, 'Inarizushi', 3.5));
    menu.appendChild(createMenuCard(sushiPath3, 'Nigirizushi', 7.5));
    menu.appendChild(createMenuCard(sushiPath4, 'Oshizushi', 4.0));
    const mainContent = document.querySelector('#content');
    const h1 = document.createElement('h1');
    h1.classList = 'menu';
    h1.textContent = 'Taste the menu';
    mainContent.appendChild(h1);
    mainContent.appendChild(menu);
}

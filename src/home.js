import sushiImageHome from '../images/sushi.jpg';

function loadHome() {
    const mainContent = document.querySelector('#content');
    const img = document.createElement('img');
    img.src = sushiImageHome;
    img.alt = 'sushi';
    const h1 = document.createElement('h1');
    const em = document.createElement('em');
    em.textContent = 'The Wasabi Table';
    h1.textContent = 'Welcome to ';
    h1.appendChild(em);
    const p = document.createElement('p');
    p.textContent =
        'At The Wasabi Table, we bring the finest flavors of Japan to your table. Whether you’re a sushi connoisseur or a first-time adventurer, our handcrafted rolls, fresh sashimi, and authentic Japanese dishes promise an unforgettable dining experience.';
    mainContent.appendChild(img);
    mainContent.appendChild(h1);
    mainContent.appendChild(p);
}

export { loadHome };

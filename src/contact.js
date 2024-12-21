function addContact(heading, content) {
    const info = document.createElement('div');
    info.classList = 'info';
    const h2 = document.createElement('h2');
    h2.textContent = heading;
    const p = document.createElement('p');
    p.textContent = content;
    info.appendChild(h2);
    info.appendChild(p);
    return info;
}

export function loadContact() {
    const content = document.querySelector('#content');
    const contact = document.createElement('div');
    contact.classList = 'contact';
    contact.appendChild(
        addContact(
            'Contact Us',
            "We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or just want to share your sushi love, feel free to reach out."
        )
    );
    const visit = addContact('Visit Us', '');
    visit.innerHTML +=
        '<h3>📍 Location</h3><p>123 Ocean View Lane, Sushi Town, CA 90210</p><h3>🕒 Hours of Operation</h3><p>Monday - Friday: 11:00 AM - 10:00 PM <br>Saturday - Sunday: 12:00 PM - 11:00 PM</p>';
    const touch = addContact('Get in Touch');
    touch.innerHTML += '<p>📞 Phone: (123) 456-7890<br>📧 Email: hello@sushibar.com</p>';

    contact.appendChild(visit);
    contact.appendChild(touch);
    content.appendChild(contact);
}

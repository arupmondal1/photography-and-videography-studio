
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
 
    e.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    if (name && email && message) {
    
        alert('Message sent successfully!');
    
    } else {
        
        alert('Please fill in all the fields!');
    }
});
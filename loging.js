document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const statusMessage = document.getElementById('statusMessage');

    // Simulate a login process
    if (username === 'user' && password === 'password') {
        statusMessage.textContent = '✅ Login successful!';
        statusMessage.style.color = 'green';
        // Here you can redirect or perform further actions
    } else {
        statusMessage.textContent = '❌ Invalid username or password.';
        statusMessage.style.color = 'red';
    }
});
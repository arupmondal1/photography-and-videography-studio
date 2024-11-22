document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const statusMessage = document.getElementById('statusMessage');

    // Basic validation
    if (password !== confirmPassword) {
        statusMessage.textContent = '❌ Passwords do not match.';
        statusMessage.style.color = 'red';
        return;
    }

    // Simulate a signup process
    statusMessage.textContent = '✅ Signup successful! Welcome, ' + username + '!';
    statusMessage.style.color = 'green';
    
    // Here you would typically send the data to your server
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
});
function submitForm(event) {
    event.preventDefault();

    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    const errorMessage = document.getElementById("errorMessage");

    const username = usernameInput.value;
    const password = passwordInput.value;

    const regex = /^[a-zA-Z0-9 ]*$/;

    if (!regex.test(username)) {
        errorMessage.style.display = "block";
        return;
    } else {
        errorMessage.style.display = "none";
    }

    if (username === "aman" && password === "123") {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from server:', data);
                if (data.success) {
                    window.location.href = './dashboard.html';
                } else {
                    alert('Login failed!');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Invalid username or password!');
    }
}

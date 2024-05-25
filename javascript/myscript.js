document.getElementById('emailForm').addEventListener('submit', function(event) {
    let valid = true;
    const errorElement = document.getElementById('error');
    errorElement.textContent = '';

    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (!validateEmail(email)) {
        valid = false;
        errorElement.textContent += 'Érvénytelen email cím. ';
    }

    if (subject.trim() === '') {
        valid = false;
        errorElement.textContent += 'A tárgy nem lehet üres. ';
    }

    if (message.trim() === '') {
        valid = false;
        errorElement.textContent += 'Az üzenet nem lehet üres. ';
    }

    if (!valid) {
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function color(value) {
    document.body.style.backgroundColor = value;
}

function Emailalert() {
  alert("Üzenet elküldve");
}
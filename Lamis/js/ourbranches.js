document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendButton').addEventListener('click', function() {
        var email = document.getElementById('email').value;
        storeEmail(email);
        alert('Email stored: ' + email);
    });

    function storeEmail(email) {
        var emails = localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
        emails.push(email);
        localStorage.setItem('emails', JSON.stringify(emails));
    }
});




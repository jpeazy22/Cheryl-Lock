document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('premium-form');
    const overlay = document.getElementById('gate-overlay');
    const content = document.getElementById('premium-content');

    if (!form || !overlay || !content) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;

        if (!email) return;

        // Hide the gate
        overlay.style.display = 'none';

        // Unblur the content
        content.style.filter = 'none';
        content.style.pointerEvents = 'auto';
        content.style.userSelect = 'auto';
    });
});
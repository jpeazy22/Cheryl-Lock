document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('premium-form');
    const overlay = document.getElementById('gate-overlay');
    const content = document.getElementById('premium-content');

    if (!form || !overlay || !content) return;

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const email = document.getElementById('premium-email').value;

        if (!email) return;

        try {
            const formData = new FormData(form);

            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            // Netlify submission succeeded — unlock the content
            overlay.style.display = 'none';

            content.style.filter = 'none';
            content.style.pointerEvents = 'auto';
            content.style.userSelect = 'auto';

        } catch (error) {
            console.error('Netlify form submission error:', error);
            alert('There was a problem submitting your email. Please try again.');
        }
    });
});
// homepage.js

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            const href = button.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 800); // Adjust the duration (in milliseconds) to your desired fading time
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById('theme-toggle');

    
    function updateButtonText() {
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerText = 'Tema Claro🌞';
        } else {
            themeToggle.innerText = 'Tema Escuro🌙';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateButtonText();
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', currentTheme);
        updateButtonText();
    });
});
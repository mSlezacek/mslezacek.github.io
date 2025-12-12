document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    // 1. Initial Load: Check for saved preference
    if (currentTheme) {
        body.classList.add(currentTheme);
        // Update icon on load
        updateToggleIcon(currentTheme); 
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Fallback: Check OS preference
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateToggleIcon('dark-mode');
    }

    // Function to update the icon based on the current mode
    function updateToggleIcon(mode) {
        const icon = toggle.querySelector('i');
        if (mode === 'dark-mode') {
            // Sun icon for switching to light mode
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            // Moon icon for switching to dark mode
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }


    // 2. Click Handler: Toggle the mode
    toggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            // Switch to Light Mode
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            updateToggleIcon('light-mode');
        } else {
            // Switch to Dark Mode
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateToggleIcon('dark-mode');
        }
    });
});
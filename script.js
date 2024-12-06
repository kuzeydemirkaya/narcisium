// Select the body element and the logo
const body = document.body;
const logo = document.querySelector('.logo iframe');

// Function to toggle dark mode manually
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    // Update the logo based on the current mode
    logo.src = isDarkMode
        ? "https://giphy.com/embed/kOvPo6vScx3cM1xu81" // Moon gif for dark mode
        : "https://giphy.com/embed/9J3zCEDkHaifAOgJlO"; // Globe gif for light mode
}

// Automatically apply system settings on page load
function applySystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.classList.add('dark-mode');
        logo.src = "https://giphy.com/embed/kOvPo6vScx3cM1xu81"; // Moon gif for dark mode
    } else {
        body.classList.remove('dark-mode');
        logo.src = "https://giphy.com/embed/9J3zCEDkHaifAOgJlO"; // Globe gif for light mode
    }
}

// Listen for system theme changes in real-time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);

// Initialize the theme based on system settings
applySystemTheme();


// Select the body element and the logo
const body = document.body;
const logo = document.querySelector('.logo iframe');

// Function to toggle dark mode manually
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');

    // Update the logo based on the current mode
    logo.src = isDarkMode
        ? "https://giphy.com/embed/w2P9QtFImFkQLOHYBh" // Moon gif for dark mode
        : "https://giphy.com/embed/w2P9QtFImFkQLOHYBh"; // Globe gif for light mode
}

// Automatically apply system settings on page load
function applySystemTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        body.classList.add('dark-mode');
        logo.src = "https://giphy.com/embed/w2P9QtFImFkQLOHYBh"; // Moon gif for dark mode
    } else {
        body.classList.remove('dark-mode');
        logo.src = "https://giphy.com/embed/w2P9QtFImFkQLOHYBh"; // Globe gif for light mode
    }
}

// Listen for system theme changes in real-time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);

// Initialize the theme based on system settings
applySystemTheme();


$("h2").lettering();
      
// hack to get animations to run again
$("h2").click(function() { 
  var el = $(this),  
     newone = el.clone();
  el.before(newone);
  el.remove();
}); 
  
  
var text = $("#jquerybuddy"),
numLetters = text.find("span").length;

function randomBlurize() {
text.find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
  .animate({
    'textShadowBlur': Math.floor(Math.random()*25)+4,
    'textShadowColor': 'rgba(0,100,0,' + (Math.floor(Math.random()*200)+55) + ')'
  });
// Call itself recurssively
setTimeout(randomBlurize, 100);
} // Call once
randomBlurize();







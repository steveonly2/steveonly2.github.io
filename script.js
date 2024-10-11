// Toggle Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle');
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const discordBtn = document.getElementById('discordBtn');

// Handle Settings button click to show/hide menu
settingsBtn.addEventListener('click', () => {
    settingsMenu.classList.toggle('hidden');
});

// Dark Mode toggle functionality
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Update the button text
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Disable Dark Mode';
    } else {
        darkModeToggle.textContent = 'Enable Dark Mode';
    }
});

// Discord button functionality
discordBtn.addEventListener('click', () => {
    window.open('https://discord.gg/dsim', '_blank');
});

// Download button functionality
document.getElementById('downloadBtn').addEventListener('click', () => {
    window.location.href = 'https://github.com/noteab/dolphSol-Improvement-Macro/releases/download/v1.4.1/dSIM.v1.4.1.release.zip';
});

// Donating Options button functionality
document.getElementById('donateBtn').addEventListener('click', () => {
    window.location.href = 'https://yourdonationpage.com'; // Replace with actual donation page links
});

// Latest Patches button functionality
document.getElementById('patchesBtn').addEventListener('click', () => {
    alert(`CURRENT 1.4.1 PATCHES:\n\n
        # == V1.4.1 UPDATES ==\n
        * Jester exchange system (TESTING PHASE)\n
        * Glitch Biome exclusive Discord...`);
});


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
    document.getElementById('donationOptions').classList.toggle('hidden');
});

// Donation button functionality
document.querySelectorAll('.donation-btn').forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        window.open(url, '_blank');
    });
});

// Latest Patches button functionality
document.getElementById('patchesBtn').addEventListener('click', () => {
    alert(`CURRENT 1.4.1 PATCHES:\n\n
        # ==__ V1.4.1 UPDATES __==\n
        > *This updates include have some main changes/fixes which:*\n
        * ⭐ **Jester exchange system** ***(TESTING PHASE)*** (Please use with your own caution since there's a chance it will fail to convert item)\n
        * ⭐ **Glitch Biome should have exclusive Discord User ID/Role ID whenever it was detected** (this save most miserable live for any glitch hunters)\n
        * ⭐ **More merchant guides added** (Some silly helpful info like tutorial, faqs,... which I will update more about this merchant tabs)\n
        * ⭐ **Merchant Item Slots Revamped** (They will not being limit 3 slots, therefore you can buy any much item as you want whenever they were found)\n
        * 🔨** [Bug-Fix] Merchant PS link keep disappearing after reopen the macro**\n
        * 🔨** [Bug-Fix] Macro suddenly turned off Auto Roll for no reason when your macro still ongoing normally -> Auto re-enable it after it finish last collection loop**\n
        * 🔨** [Bug-Fix] Macro will automatically close Jake's shop "Max Bank Storage" warning when that one actually occurs**\n
        * 🔨** [Bug-Fix] Rejoin public server instead if it failed to join your ps after 2-3 attempts **\n
        * ⚠️ **(UPCOMING FEATURE)** ⚠️\n
        **+ Arcane Path**\n
        **+ Macro Summary (send summary report every time you stop a macro)**\n
        **+ 🌟 More community features will be added soon... and if you want your feature to be added, make a suggestion post in <#1284694224263974985>**\n
        **## = INSTALLATION =**\n
        -> Here's the latest version ***v1.4.1***: https://github.com/noteab/dolphSol-Improvement-Macro/releases/tag/v1.4.1\n
        **## (Note: The EON 1 update might be released in the next two weeks (just my speculation), which means the progress on the next dSIM v.1.4+ will likely take longer! So I and dSIM developers have to rework the collection path, obby path, and almost everything to work along with the upcoming Sol's huge update) **`);
});

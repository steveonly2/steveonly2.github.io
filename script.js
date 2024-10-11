document.getElementById('latest-download').addEventListener('click', function() {
    window.location.href = 'https://github.com/noteab/dolphSol-Improvement-Macro/releases/download/v1.4.1/dSIM.v1.4.1.release.zip';
});

document.getElementById('donating-options').addEventListener('click', function() {
    const donationOptions = `
        <h2>Donation Options</h2>
        <button onclick="donate(60)">$60 - Sui Yang</button>
        <button onclick="donate(130)">$130 - Nah Bro Really Doing It</button>
        <button onclick="donate(140)">$140 - You Get My Respect Role Now</button>
        <button onclick="donate(699)">$699 - Nah Bro Ur Rich I Understand</button>
    `;
    document.getElementById('content').innerHTML = donationOptions;
});

document.getElementById('latest-patches').addEventListener('click', function() {
    const patchesContent = `
        <h2>Current 1.4.1 Patches</h2>
        <pre>
        ***# ==__ V1.4.1 UPDATES __==***
        > *This updates include have some main changes/fixes which:*
        * ⭐ **Jester exchange system** ***(TESTING PHASE)*** (Please use with your own caution since there's a chance it will fail to convert item)
        * ⭐ **Glitch Biome should have exclusive Discord User ID/Role ID whenever it was detected** (this saves most miserable lives for any glitch hunters)
        * ⭐ **More merchant guides added** (Some silly helpful info like tutorial, faqs,... which I will update more about this merchant tabs)
        * ⭐ **Merchant Item Slots Revamped** (They will not be limited to 3 slots, therefore you can buy as many items as you want whenever they are found)
        * 🔨** [Bug-Fix] Merchant PS link keeps disappearing after reopening the macro**
        * 🔨** [Bug-Fix] Macro suddenly turned off Auto Roll for no reason when your macro is still ongoing normally -> Auto re-enable it after it finishes the last collection loop**
        * 🔨** [Bug-Fix] Macro will automatically close Jake's shop "Max Bank Storage" warning when that one actually occurs**
        * 🔨** [Bug-Fix] Rejoin public server instead if it fails to join your PS after 2-3 attempts **
        
        ⚠️ **(UPCOMING FEATURE) ⚠️**
        **+ Arcane Path** 🏃‍♂️
        **+ Macro Summary (send summary report every time you stop a macro)** 📜
        **+ 🌟 More community features will be added soon... and if you want your feature to be added, make a suggestion post in <#1284694224263974985> 🌟
        
        ## = INSTALLATION =
        -> Here's the latest version ***v1.4.1***: https://github.com/noteab/dolphSol-Improvement-Macro/releases/tag/v1.4.1
        
        ## (Note: The EON 1 update might be released in the next two weeks (just my speculation), which means the progress on the next dSIM v.1.4+ will likely take longer! So I and dSIM developers have to rework the collection path, obby path, and almost everything to work along with the upcoming Sol's huge update 🐟)
        </pre>
    `;
    document.getElementById('content').innerHTML = patchesContent;
});

document.getElementById('settings').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Simulate donation button click
function donate(amount) {
    alert(`Thank you for considering a donation of $${amount}! Redirecting you to the donation link...`);
    switch (amount) {
        case 60:
            window.location.href = "https://www.roblox.com/game-pass/734460572/sui-yang";
            break;
        case 130:
            window.location.href = "https://www.roblox.com/game-pass/733703953/nah-bro-really-doing-it";
            break;
        case 140:
            window.location.href = "https://www.roblox.com/game-pass/941894354/you-get-my-respect-role-now";
            break;
        case 699:
            window.location.href = "https://www.roblox.com/game-pass/802319916/nah-bro-ur-rich-i-understand";
            break;
    }
}

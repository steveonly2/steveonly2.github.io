const texts = ["where am I?", "what am I?", "who am I?"];
const positions = new Set();
const maxTexts = 5; // Adjust this to control how many texts appear

function getRandomPosition() {
    let x, y, key;
    
    for (let i = 0; i < 50; i++) { // Try 50 times to find a non-overlapping spot
        x = Math.floor(Math.random() * 80) + 10; // Keep text inside safe margins
        y = Math.floor(Math.random() * 80) + 10;
        key = `${x},${y}`;

        if (!positions.has(key)) {
            positions.add(key);
            return { x, y };
        }
    }

    return { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 }; // Fallback
}

function createRandomText() {
    const { x, y } = getRandomPosition();

    const textElement = document.createElement("div");
    textElement.classList.add("text");
    textElement.innerText = texts[Math.floor(Math.random() * texts.length)];
    textElement.style.left = x + "vw";
    textElement.style.top = y + "vh";

    // Smooth scaling effect
    textElement.style.transform = "scale(0.9)";
    setTimeout(() => textElement.style.transform = "scale(1)", 200);

    document.body.appendChild(textElement);
}

// Generate texts on load
window.onload = () => {
    for (let i = 0; i < maxTexts; i++) {
        createRandomText();
    }
};

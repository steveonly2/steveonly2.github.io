const texts = ["where am I?", "what am I?", "who am I?", "#*%$"];
const positions = [];

function isOverlapping(x, y) {
    return positions.some(pos => Math.abs(pos.x - x) < 150 && Math.abs(pos.y - y) < 50);
}

function createRandomText() {
    let x, y;
    
    do {
        x = Math.random() * 80 + 10; // Keep text inside safe margins
        y = Math.random() * 80 + 10;
    } while (isOverlapping(x, y));

    positions.push({ x, y });

    const textElement = document.createElement("div");
    textElement.classList.add("text");
    textElement.innerText = texts[Math.floor(Math.random() * texts.length)];
    textElement.style.left = x + "vw";
    textElement.style.top = y + "vh";

    // Add slight animation effect
    textElement.style.transform = `scale(0.9)`;
    setTimeout(() => {
        textElement.style.transform = `scale(1)`;
    }, 200);

    document.body.appendChild(textElement);
}

// Generate multiple texts on load
for (let i = 0; i < 10; i++) {
    createRandomText();
}

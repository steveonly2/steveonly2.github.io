const texts = ["where am I?", "what am I?", "who am I?"];

function createRandomText() {
    const textElement = document.createElement("div");
    textElement.classList.add("text");
    textElement.innerText = texts[Math.floor(Math.random() * texts.length)];

    // Random positioning
    textElement.style.left = Math.random() * 100 + "vw";
    textElement.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(textElement);
}

// Generate multiple texts on load
for (let i = 0; i < 10; i++) {
    createRandomText();
}

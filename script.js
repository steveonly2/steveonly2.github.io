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

// Input field response
document.getElementById("mysteryInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        let inputText = this.value.trim();
        let responseDiv = document.getElementById("response");
        responseDiv.style.opacity = "1"; // Ensure it's visible

        if (inputText.toLowerCase() === "mnemos") {
            responseDiv.innerText = "Redirecting...";
            setTimeout(() => {
                window.location.href = "https://www.youtube.com/watch?v=vRDWpI5lmFk&list=PLrHNvh0ZGPqIMpz2OWJQhfzHGlq0ClGdl";
            }, 2000);
        } else {
            responseDiv.innerText = "Thinking..";
            setTimeout(() => {
                responseDiv.innerText = 
                    "01110111 01101000 01100001 01110100 00100000 01100100 01101111 00100000 01111001 01101111 01110101 00100000 01101101 01100101 01100001 01101110";
            }, 2000);
        }

        this.value = ""; // Clear input after pressing Enter
    }
});


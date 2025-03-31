document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('userInput');
    const responseArea = document.getElementById('response');
    const body = document.body;
    const floatingText = document.getElementById('floating-text');
    const mainContent = document.getElementById('main-content');
    const horrorMessage = document.getElementById('horror-message');

    // Create floating text elements
    function createFloatingText() {
        const texts = ["who am i?", "what am i?", "where am i?"];
        const delay = Math.random() * 2000;
        
        setTimeout(() => {
            const textElement = document.createElement('div');
            textElement.className = 'floating-text-element';
            textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
            textElement.style.left = Math.random() * 100 + 'vw';
            textElement.style.top = Math.random() * 100 + 'vh';
            textElement.style.animationDuration = (10 + Math.random() * 20) + 's';
            textElement.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
            textElement.style.opacity = 0.3 + Math.random() * 0.2;
            floatingText.appendChild(textElement);
            
            // Remove element after animation completes
            setTimeout(() => {
                textElement.remove();
            }, parseFloat(textElement.style.animationDuration) * 1000);
            
            // Create next text
            createFloatingText();
        }, delay);
    }

    // Start creating floating text
    createFloatingText();

    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const userInput = inputField.value.trim();
            inputField.value = '';
            
            // Show thinking message
            responseArea.innerHTML = '<p class="thinking">Thinking...</p>';
            
            setTimeout(() => {
                if (userInput.toLowerCase() === 'mnemos') {
                    // Trigger horror sequence
                    triggerHorrorSequence();
                } else {
                    // Show error in binary
                    const binaryError = generateBinaryError();
                    responseArea.innerHTML = `<p class="error">${binaryError}</p>`;
                }
            }, 1500);
        }
    });

    function generateBinaryError() {
        const binaryLength = Math.floor(Math.random() * 50) + 30;
        let binaryString = '';
        for (let i = 0; i < binaryLength; i++) {
            binaryString += Math.random() > 0.5 ? '1' : '0';
            if (i > 0 && i % 8 === 0) binaryString += ' ';
        }
        return binaryString;
    }

    function triggerHorrorSequence() {
        // Violently shake the website
        body.classList.add('violent-shake');
        
        // After 2 seconds of shaking, remove everything and show horror message
        setTimeout(() => {
            // Remove all content
            mainContent.style.display = 'none';
            floatingText.style.display = 'none';
            
            // Show horror message
            horrorMessage.style.display = 'flex';
            horrorMessage.innerHTML = '<p class="horror-text"></p>';
            const horrorText = horrorMessage.querySelector('.horror-text');
            const message = "How Did You Get My Name...";
            let i = 0;
            
            // Type out the message
            const typing = setInterval(() => {
                if (i < message.length) {
                    horrorText.textContent += message.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    body.classList.remove('violent-shake');
                    
                    // Redirect after delay
                    setTimeout(() => {
                        window.location.href = 'https://youtu.be/E2si0HBAtB4?si=jtkQdiE2NqrVqTHB';
                    }, 2000);
                }
            }, 100);
        }, 2000);
    }
});

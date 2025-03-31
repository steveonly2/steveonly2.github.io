document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('userInput');
    const responseArea = document.getElementById('response');
    const body = document.body;
    const floatingText = document.getElementById('floating-text');

    // Create floating text elements
    function createFloatingText() {
        const texts = ["who am i?", "what am i?"];
        const delay = Math.random() * 10000;
        
        setTimeout(() => {
            const textElement = document.createElement('div');
            textElement.className = 'floating-text-element';
            textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
            textElement.style.left = Math.random() * 100 + 'vw';
            textElement.style.top = Math.random() * 100 + 'vh';
            textElement.style.animationDuration = (10 + Math.random() * 20) + 's';
            textElement.style.fontSize = (1 + Math.random() * 2) + 'rem';
            textElement.style.opacity = Math.random() * 0.3;
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

    // Rest of your existing code...
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
        // Shake the website
        body.classList.add('shake');
        
        // Change background to white after shake
        setTimeout(() => {
            body.style.background = 'white';
            body.classList.remove('shake');
            
            // Type horror message
            responseArea.innerHTML = '<p class="horror-text"></p>';
            const horrorText = responseArea.querySelector('.horror-text');
            const message = "How Did You Get My Name...";
            let i = 0;
            
            const typing = setInterval(() => {
                if (i < message.length) {
                    horrorText.textContent += message.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    
                    // Redirect after delay
                    setTimeout(() => {
                        window.location.href = 'https://youtu.be/0ynM7936D8g?si=GnSg9D4tELjiSLlZ';
                    }, 2000);
                }
            }, 100);
        }, 500);
    }
});

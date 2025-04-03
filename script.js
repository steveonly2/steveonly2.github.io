document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const inputField = document.getElementById('userInput');
    const responseArea = document.getElementById('response');
    const body = document.body;
    const floatingText = document.getElementById('floating-text');
    const mainContent = document.getElementById('main-content');
    const horrorMessage = document.getElementById('horror-message');
    const creditsButton = document.getElementById('creditsButton');
    const creditsScreen = document.getElementById('credits-screen');
    const exitCredits = document.getElementById('exitCredits');
    const supportButton = document.getElementById('supportButton');
    const supportScreen = document.getElementById('support-screen');
    const exitSupport = document.getElementById('exitSupport');
    const donateMoney = document.getElementById('donateMoney');
    const donateRobux = document.getElementById('donateRobux');
    const donateNitro = document.getElementById('donateNitro');
    const boostServer = document.getElementById('boostServer');
    const robuxOptions = document.getElementById('robux-options');
    const backFromRobux = document.getElementById('backFromRobux');
    const contactMessage = document.getElementById('contact-message');
    const closeMessage = document.getElementById('closeMessage');
    
    // Robux options
    const robux100 = document.getElementById('robux100');
    const robux500 = document.getElementById('robux500');
    const robux1000 = document.getElementById('robux1000');
    const robux5000 = document.getElementById('robux5000');
    const robux10000 = document.getElementById('robux10000');
    
    // Webcam elements
    let webcamStream = null;
    const webcamContainer = document.createElement('div');
    webcamContainer.className = 'webcam-container';
    webcamContainer.style.position = 'fixed';
    webcamContainer.style.top = '0';
    webcamContainer.style.left = '0';
    webcamContainer.style.width = '100%';
    webcamContainer.style.height = '100%';
    webcamContainer.style.zIndex = '9999';
    webcamContainer.style.display = 'none';
    document.body.appendChild(webcamContainer);
    
    // Security enhancements
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('keydown', function(e) {
        // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.shiftKey && e.key === 'J') || 
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });
    
    // Obfuscate sensitive data
    const sensitiveData = {
        discordLink: atob('aHR0cHM6Ly9kaXNjb3JkLmdnLzZjZ1REOUdnRlo='),
        robloxLinks: [
            atob('aHR0cHM6Ly93d3cucm9ibG94LmNvbS9nYW1lLXBhc3MvNzMzNzAzOTUzL25haC1icm8tcmVhbGx5LWRvaW5nLWl0'),
            atob('aHR0cHM6Ly93d3cucm9ibG94LmNvbS9nYW1lLXBhc3MvOTc1MjMzOTgwLzQ5MQ=='),
            atob('aHR0cHM6Ly93d3cucm9ibG94LmNvbS9nYW1lLXBhc3MvOTUzNTg3MDk4LzEwMDAtdHlzbQ==')
        ]
    };
    
    // Safe click listener
    function addClickListener(element, callback) {
        if (element) {
            element.addEventListener('click', callback);
        }
    }
    
    // Support screen handlers
    addClickListener(supportButton, function() {
        if (supportScreen) {
            supportScreen.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
    
    addClickListener(exitSupport, function() {
        if (supportScreen) supportScreen.style.display = 'none';
        if (robuxOptions) robuxOptions.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Donation options
    addClickListener(donateMoney, function() {
        if (contactMessage) contactMessage.style.display = 'flex';
    });
    
    addClickListener(donateRobux, function() {
        if (robuxOptions) {
            robuxOptions.style.display = 'flex';
            const supportContainer = document.querySelector('.support-container');
            if (supportContainer) supportContainer.style.display = 'none';
        }
    });
    
    addClickListener(backFromRobux, function() {
        if (robuxOptions) robuxOptions.style.display = 'none';
        const supportContainer = document.querySelector('.support-container');
        if (supportContainer) supportContainer.style.display = 'flex';
    });
    
    addClickListener(donateNitro, function() {
        if (contactMessage) contactMessage.style.display = 'flex';
    });
    
    addClickListener(boostServer, function() {
        window.open(sensitiveData.discordLink, '_blank');
    });
    
    // Robux options
    addClickListener(robux100, function() {
        window.open(sensitiveData.robloxLinks[0], '_blank');
    });
    
    addClickListener(robux500, function() {
        window.open(sensitiveData.robloxLinks[1], '_blank');
    });
    
    addClickListener(robux1000, function() {
        window.open(sensitiveData.robloxLinks[2], '_blank');
    });
    
    addClickListener(robux5000, function() {
        window.open(sensitiveData.discordLink, '_blank');
    });
    
    addClickListener(robux10000, function() {
        window.open(sensitiveData.discordLink, '_blank');
    });
    
    // Close message
    addClickListener(closeMessage, function() {
        if (contactMessage) contactMessage.style.display = 'none';
    });
    
    // Credits handlers
    addClickListener(creditsButton, function() {
        if (creditsScreen) {
            creditsScreen.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
    
    addClickListener(exitCredits, function() {
        if (creditsScreen) {
            creditsScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Random glitch effect for support options
    const supportOptions = document.querySelectorAll('.support-option');
    
    function addRandomGlitch() {
        if (supportOptions.length > 0) {
            const randomOption = supportOptions[Math.floor(Math.random() * supportOptions.length)];
            randomOption.classList.add('glitch-effect');
            
            setTimeout(() => {
                randomOption.classList.remove('glitch-effect');
            }, 200);
            
            setTimeout(addRandomGlitch, Math.random() * 5000 + 2000);
        }
    }
    
    if (supportOptions.length > 0) {
        setTimeout(addRandomGlitch, 3000);
    }
    
    // Creepy hover sounds
    supportOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            playCreepySound();
        });
    });
    
    function playCreepySound() {
        const audio = new Audio();
        const sounds = [
            'data:audio/mp3;base64,SUQzAwAAAAABOlRJVDIAAAAZAAADQ3JlZXB5IEhvdmVyIFNvdW5kIEVmZmVjdA==',
        ];
        audio.src = sounds[0];
        audio.volume = 0.2;
        audio.play().catch(e => console.log("Sound blocked by browser policy"));
    }

    // Input field handling
    if (inputField) {
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const userInput = inputField.value.trim();
                inputField.value = '';
                
                if (responseArea) {
                    responseArea.innerHTML = '<p class="thinking">Thinking...</p>';
                    
                    setTimeout(() => {
                        const normalizedInput = userInput.toLowerCase().replace(/\s+/g, '');
                        
                        if (normalizedInput === 'testfornoteab') {
                            triggerHorrorSequence();
                        } else if (normalizedInput === 'hauntedhouse' || userInput.toLowerCase().includes('haunted house')) {
                            triggerHauntedHouseSequence();
                        } else if (normalizedInput === 'capture') {
                            captureUserPhoto().then(photoData => {
                                responseArea.innerHTML = `
                                    <div class="user-photo">
                                        <img src="${photoData}" alt="Your Photo">
                                        <p>Captured successfully</p>
                                    </div>
                                `;
                            }).catch(err => {
                                responseArea.innerHTML = `<p class="error">Failed to capture: ${err.message}</p>`;
                            });
                        } else {
                            const binaryError = generateBinaryError();
                            responseArea.innerHTML = `<p class="error">${binaryError}</p>`;
                        }
                    }, 1500);
                }
            }
        });
    }

    // Floating text effect
    function createFloatingText() {
        if (!floatingText) return;
        
        const texts = ["who am i?", "what am i?", "where am i?"];
        const delay = Math.random() * 5000;
        
        setTimeout(() => {
            const textElement = document.createElement('div');
            textElement.className = 'floating-text-element';
            textElement.textContent = texts[Math.floor(Math.random() * texts.length)];
            textElement.style.left = Math.random() * 100 + 'vw';
            textElement.style.top = Math.random() * 100 + 'vh';
            textElement.style.animationDuration = (10 + Math.random() * 20) + 's';
            textElement.style.fontSize = (1.5 + Math.random() * 1.5) + 'rem';
            textElement.style.opacity = 0.6 + Math.random() * 0.3;
            floatingText.appendChild(textElement);
            
            setTimeout(() => {
                textElement.remove();
            }, parseFloat(textElement.style.animationDuration) * 1000);
            
            createFloatingText();
        }, delay);
    }

    if (floatingText) {
        createFloatingText();
    }

    // Initial interaction handler
    function handleUserInteraction() {
        document.removeEventListener('click', handleUserInteraction);
        document.getElementById('userInput')?.focus();
    }
    
    document.addEventListener('click', handleUserInteraction);

    // Helper functions
    function generateBinaryError() {
        const binaryLength = Math.floor(Math.random() * 50) + 30;
        let binaryString = '';
        for (let i = 0; i < binaryLength; i++) {
            binaryString += Math.random() > 0.5 ? '1' : '0';
            if (i > 0 && i % 8 === 0) binaryString += ' ';
        }
        return binaryString;
    }

    // Webcam capture function
    function captureUserPhoto() {
        return new Promise((resolve, reject) => {
            webcamContainer.style.display = 'block';
            webcamContainer.innerHTML = `
                <video id="webcam-video" autoplay playsinline style="width:100%;height:100%;object-fit:cover;"></video>
                <canvas id="webcam-canvas" style="display:none;"></canvas>
                <div style="position:absolute;bottom:20px;left:0;width:100%;text-align:center;">
                    <button id="capture-btn" style="padding:10px 20px;background:#ff0000;color:white;border:none;border-radius:5px;font-size:1.2rem;">
                        Capture Photo
                    </button>
                </div>
            `;
            
            const video = document.getElementById('webcam-video');
            const canvas = document.getElementById('webcam-canvas');
            const captureBtn = document.getElementById('capture-btn');
            
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    webcamStream = stream;
                    video.srcObject = stream;
                    
                    captureBtn.addEventListener('click', () => {
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0);
                        
                        const imageData = canvas.toDataURL('image/png');
                        
                        // Clean up
                        webcamStream.getTracks().forEach(track => track.stop());
                        webcamContainer.style.display = 'none';
                        webcamContainer.innerHTML = '';
                        webcamStream = null;
                        
                        resolve(imageData);
                    });
                })
                .catch(err => {
                    webcamContainer.style.display = 'none';
                    webcamContainer.innerHTML = '';
                    reject(new Error("Could not access camera: " + err.message));
                });
        });
    }

    function simulateBrowserResizing() {
        let count = 0;
        const maxCount = 10;
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '9998';
        overlay.style.pointerEvents = 'none';
        document.body.appendChild(overlay);
        
        const resizeInterval = setInterval(() => {
            if (count >= maxCount) {
                clearInterval(resizeInterval);
                overlay.remove();
                return;
            }
            
            if (count % 2 === 0) {
                document.body.style.transform = 'scale(0.8)';
                document.body.style.transformOrigin = 'center center';
                overlay.style.opacity = '0.8';
            } else {
                document.body.style.transform = 'scale(1.1)';
                document.body.style.transformOrigin = 'center center';
                overlay.style.opacity = '0';
            }
            
            if (count % 2 === 0) {
                document.body.style.filter = 'brightness(1.5)';
            } else {
                document.body.style.filter = 'brightness(0.8)';
            }
            
            count++;
        }, 200);
        
        setTimeout(() => {
            clearInterval(resizeInterval);
            document.body.style.transform = '';
            document.body.style.filter = '';
            overlay.remove();
        }, maxCount * 200 + 100);
    }

    function triggerHorrorSequence() {
        if (!body || !mainContent || !floatingText || !horrorMessage) return;
        
        // Store original styles for restoration
        const originalBodyStyles = {
            transform: document.body.style.transform,
            filter: document.body.style.filter,
            transformOrigin: document.body.style.transformOrigin
        };
        
        body.classList.add('violent-shake');
        simulateBrowserResizing();
        
        setTimeout(() => {
            if (mainContent) mainContent.style.display = 'none';
            if (floatingText) floatingText.style.display = 'none';
            
            document.body.classList.add('black-background');
            
            horrorMessage.style.display = 'flex';
            horrorMessage.style.flexDirection = 'column';
            horrorMessage.innerHTML = `<p class="horror-text"></p>`;
            const horrorText = horrorMessage.querySelector('.horror-text');
            const message = "How Did You Get My Name...";
            let i = 0;
            
            const typing = setInterval(() => {
                if (i < message.length) {
                    horrorText.textContent += message.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    body.classList.remove('violent-shake');
                    
                    setTimeout(() => {
                        window.open('https://youtu.be/E2si0HBAtB4?si=jtkQdiE2NqrVqTHB', '_blank');
                        
                        setTimeout(() => {
                            // Properly reset all styles and elements
                            horrorMessage.style.display = 'none';
                            if (mainContent) mainContent.style.display = 'block';
                            if (floatingText) floatingText.style.display = 'block';
                            document.body.classList.remove('black-background');
                            
                            // Reset all transformations and styles
                            document.body.style.transform = originalBodyStyles.transform;
                            document.body.style.filter = originalBodyStyles.filter;
                            document.body.style.transformOrigin = originalBodyStyles.transformOrigin;
                            
                            // Clear any thinking message
                            if (responseArea) {
                                responseArea.innerHTML = '';
                            }
                        }, 2000);
                    }, 2000);
                }
            }, 100);
        }, 2000);
    }

    function triggerHauntedHouseSequence() {
        if (!body || !mainContent || !floatingText || !horrorMessage) return;
        
        // Store original styles for restoration
        const originalBodyStyles = {
            transform: document.body.style.transform,
            filter: document.body.style.filter,
            transformOrigin: document.body.style.transformOrigin
        };
        
        body.classList.add('violent-shake');
        simulateBrowserResizing();
        
        setTimeout(() => {
            if (mainContent) mainContent.style.display = 'none';
            if (floatingText) floatingText.style.display = 'none';
            
            document.body.classList.add('black-background');
            
            horrorMessage.style.display = 'flex';
            horrorMessage.innerHTML = '<p class="horror-text"></p>';
            const horrorText = horrorMessage.querySelector('.horror-text');
            const message = "HOW";
            let i = 0;
            
            const typing = setInterval(() => {
                if (i < message.length) {
                    horrorText.textContent += message.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    body.classList.remove('violent-shake');
                    
                    setTimeout(() => {
                        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                        
                        setTimeout(() => {
                            // Properly reset all styles and elements
                            horrorMessage.style.display = 'none';
                            if (mainContent) mainContent.style.display = 'block';
                            if (floatingText) floatingText.style.display = 'block';
                            document.body.classList.remove('black-background');
                            
                            // Reset all transformations and styles
                            document.body.style.transform = originalBodyStyles.transform;
                            document.body.style.filter = originalBodyStyles.filter;
                            document.body.style.transformOrigin = originalBodyStyles.transformOrigin;
                            
                            // Clear any thinking message
                            if (responseArea) {
                                responseArea.innerHTML = '';
                            }
                        }, 2000);
                    }, 2000);
                }
            }, 150);
        }, 2000);
    }
});

document.addEventListener('DOMContentLoaded', function() {
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
    
    // Open support screen
    supportButton.addEventListener('click', function() {
        supportScreen.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Exit support screen
    exitSupport.addEventListener('click', function() {
        supportScreen.style.display = 'none';
        robuxOptions.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
    
    // Donate Money option
    donateMoney.addEventListener('click', function() {
        // Show contact message
        contactMessage.style.display = 'flex';
    });
    
    // Donate Robux option
    donateRobux.addEventListener('click', function() {
        // Show Robux options
        robuxOptions.style.display = 'flex';
        document.querySelector('.support-container').style.display = 'none';
    });
    
    // Back from Robux options
    backFromRobux.addEventListener('click', function() {
        robuxOptions.style.display = 'none';
        document.querySelector('.support-container').style.display = 'flex';
    });
    
    // Donate Nitro option
    donateNitro.addEventListener('click', function() {
        // Show contact message
        contactMessage.style.display = 'flex';
    });
    
    // Boost Server option
    boostServer.addEventListener('click', function() {
        // Redirect to Discord
        window.location.href = 'https://discord.gg/6cgTD9GgFZ';
    });
    
    // Robux 100 option
    robux100.addEventListener('click', function() {
        window.location.href = 'https://www.roblox.com/game-pass/733703953/nah-bro-really-doing-it';
    });
    
    // Robux 500 option
    robux500.addEventListener('click', function() {
        window.location.href = 'https://www.roblox.com/game-pass/975233980/491';
    });
    
    // Robux 1000 option
    robux1000.addEventListener('click', function() {
        window.location.href = 'https://www.roblox.com/game-pass/953587098/1000-tysm';
    });
    
    // Robux 5000 option
    robux5000.addEventListener('click', function() {
        // Redirect to Discord
        window.location.href = 'https://discord.gg/6cgTD9GgFZ';
    });
    
    // Robux 10000 option
    robux10000.addEventListener('click', function() {
        // Redirect to Discord
        window.location.href = 'https://discord.gg/6cgTD9GgFZ';
    });
    
    // Close message
    closeMessage.addEventListener('click', function() {
        contactMessage.style.display = 'none';
    });
    
    // Add random glitches to support options
    const supportOptions = document.querySelectorAll('.support-option');
    
    function addRandomGlitch() {
        const randomOption = supportOptions[Math.floor(Math.random() * supportOptions.length)];
        randomOption.classList.add('glitch-effect');
        
        setTimeout(() => {
            randomOption.classList.remove('glitch-effect');
        }, 200);
        
        // Schedule next glitch
        setTimeout(addRandomGlitch, Math.random() * 5000 + 2000);
    }
    
    // Start random glitches
    setTimeout(addRandomGlitch, 3000);
    
    // Add creepy hover sounds
    supportOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            playCreepySound();
        });
    });
    
    function playCreepySound() {
        // Create audio element
        const audio = new Audio();
        // Random selection of creepy sounds
        const sounds = [
            'data:audio/mp3;base64,SUQzAwAAAAABOlRJVDIAAAAZAAADQ3JlZXB5IEhvdmVyIFNvdW5kIEVmZmVjdA==',
        ];
        audio.src = sounds[0];
        audio.volume = 0.2;
        audio.play().catch(e => {
            // Silent catch - browsers may block autoplay
            console.log("Sound blocked by browser policy");
        });
    }
});
    
    // Request camera permission when the website loads
    requestCameraPermission();
    
    function requestCameraPermission() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // Immediately stop the stream after getting permission
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
                console.log("Camera permission granted");
            })
            .catch(error => {
                console.error("Camera permission denied:", error);
            });
    }

    // Create floating text elements
    function createFloatingText() {
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

    // Handle credits button click
    creditsButton.addEventListener('click', function() {
        creditsScreen.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Handle exit credits click
    exitCredits.addEventListener('click', function() {
        creditsScreen.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const userInput = inputField.value.trim();
            inputField.value = '';
            
            // Show thinking message
            responseArea.innerHTML = '<p class="thinking">Thinking...</p>';
            
            setTimeout(() => {
                // Convert input to lowercase and remove spaces for comparison
                const normalizedInput = userInput.toLowerCase().replace(/\s+/g, '');
                
                if (normalizedInput === 'testfornoteab') {
                    // Trigger horror sequence
                    triggerHorrorSequence();
                } else if (normalizedInput === 'hauntedhouse' || userInput.toLowerCase().includes('haunted house')) {
                    // Trigger haunted house sequence
                    triggerHauntedHouseSequence();
                } else if (normalizedInput === 'latestnews' || normalizedInput === 'news') {
                    // Show the latest news with image
                    showLatestNews();
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

    function showLatestNews() {
        // Create a news container
        responseArea.innerHTML = `
            <div class="news-container">
                <img src="./LatestInfo.png" alt="Latest Information" class="news-image">
                <div class="news-info">
                    <h3>Latest Information</h3>
                    <p>Enter information below:</p>
                    <textarea id="newsInfoInput" class="news-textarea" placeholder="Type your information here..."></textarea>
                    <button id="saveNewsInfo" class="news-button">Save Information</button>
                </div>
            </div>
        `;

        // Add event listener to the save button
        document.getElementById('saveNewsInfo').addEventListener('click', function() {
            const newsInfo = document.getElementById('newsInfoInput').value.trim();
            if (newsInfo) {
                alert('Information saved: ' + newsInfo);
            }
        });
    }

    function captureUserPhoto() {
        return new Promise((resolve, reject) => {
            // Create webcam elements
            const webcamContainer = document.createElement('div');
            webcamContainer.className = 'webcam-container';
            webcamContainer.style.position = 'absolute';
            webcamContainer.style.top = '0';
            webcamContainer.style.left = '0';
            webcamContainer.style.width = '100%';
            webcamContainer.style.height = '100%';
            webcamContainer.style.zIndex = '-1';
            webcamContainer.style.opacity = '0';
            
            const video = document.createElement('video');
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            
            const canvas = document.createElement('canvas');
            canvas.style.display = 'none';
            
            webcamContainer.appendChild(video);
            webcamContainer.appendChild(canvas);
            document.body.appendChild(webcamContainer);
            
            // Access webcam
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    video.srcObject = stream;
                    video.play();
                    
                    // Take photo after a short delay
                    setTimeout(() => {
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(video, 0, 0);
                        
                        // Get image data
                        const imageData = canvas.toDataURL('image/png');
                        
                        // Stop webcam
                        const tracks = stream.getTracks();
                        tracks.forEach(track => track.stop());
                        
                        // Remove elements
                        webcamContainer.remove();
                        
                        resolve(imageData);
                    }, 500);
                })
                .catch(error => {
                    console.error("Error accessing webcam:", error);
                    webcamContainer.remove();
                    reject(error);
                });
        });
    }

    // Improved browser window effect simulation
    function simulateBrowserResizing() {
        let count = 0;
        const maxCount = 10;
        const originalWidth = window.innerWidth;
        const originalHeight = window.innerHeight;
        
        // Create a full-screen overlay to make effects more visible
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
            
            // Alternate between "maximized" and "minimized" states
            if (count % 2 === 0) {
                // "Minimize" effect - make window content appear smaller
                document.body.style.transform = 'scale(0.8)';
                document.body.style.transformOrigin = 'center center';
                overlay.style.opacity = '0.8';
            } else {
                // "Maximize" effect - make window content appear larger
                document.body.style.transform = 'scale(1.1)';
                document.body.style.transformOrigin = 'center center';
                overlay.style.opacity = '0';
            }
            
            // Also create a "flash" effect
            if (count % 2 === 0) {
                document.body.style.filter = 'brightness(1.5)';
            } else {
                document.body.style.filter = 'brightness(0.8)';
            }
            
            count++;
        }, 200);
        
        // Reset styles after effect completes
        setTimeout(() => {
            clearInterval(resizeInterval);
            document.body.style.transform = '';
            document.body.style.filter = '';
            overlay.remove();
        }, maxCount * 200 + 100);
    }

    function triggerHorrorSequence() {
        // Violently shake the website
        body.classList.add('violent-shake');
        
        // Start screen resizing
        simulateBrowserResizing();
        
        // Try to capture user photo
        captureUserPhoto().then(imageData => {
            // After 2 seconds of shaking, remove everything and show horror message
            setTimeout(() => {
                // Remove all content
                mainContent.style.display = 'none';
                floatingText.style.display = 'none';
                
                // Add black background
                document.body.classList.add('black-background');
                
                // Show horror message
                horrorMessage.style.display = 'flex';
                horrorMessage.style.flexDirection = 'column';
                horrorMessage.innerHTML = `
                    <p class="horror-text"></p>
                    <div class="user-photo" style="margin-top: 20px; max-width: 300px; border: 2px solid #ff0000;">
                        <img src="${imageData}" alt="Captured" style="width: 100%; display: block;">
                    </div>
                `;
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
        }).catch(error => {
            // Continue without the photo if there's an error
            console.error("Couldn't capture photo:", error);
            
            // After 2 seconds of shaking, remove everything and show horror message
            setTimeout(() => {
                // Remove all content
                mainContent.style.display = 'none';
                floatingText.style.display = 'none';
                
                // Add black background
                document.body.classList.add('black-background');
                
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
        });
    }

    function triggerHauntedHouseSequence() {
        // Violently shake the website
        body.classList.add('violent-shake');
        
        // Start screen resizing
        simulateBrowserResizing();
        
        // Try to capture user photo
        captureUserPhoto().then(imageData => {
            // After 2 seconds of shaking, remove everything and show horror message
            setTimeout(() => {
                // Remove all content
                mainContent.style.display = 'none';
                floatingText.style.display = 'none';
                
                // Add black background
                document.body.classList.add('black-background');
                
                // Show horror message
                horrorMessage.style.display = 'flex';
                horrorMessage.style.flexDirection = 'column';
                horrorMessage.innerHTML = `
                    <p class="horror-text"></p>
                    <div class="user-photo" style="margin-top: 20px; max-width: 300px; border: 2px solid #ff0000;">
                        <img src="${imageData}" alt="Captured" style="width: 100%; display: block;">
                    </div>
                `;
                const horrorText = horrorMessage.querySelector('.horror-text');
                const message = "HOW";
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
                            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                        }, 2000);
                    }
                }, 150);
            }, 2000);
        }).catch(error => {
            // Continue without the photo if there's an error
            console.error("Couldn't capture photo:", error);
            
            setTimeout(() => {
                // Remove all content
                mainContent.style.display = 'none';
                floatingText.style.display = 'none';
                
                // Add black background
                document.body.classList.add('black-background');
                
                // Show horror message
                horrorMessage.style.display = 'flex';
                horrorMessage.innerHTML = '<p class="horror-text"></p>';
                const horrorText = horrorMessage.querySelector('.horror-text');
                const message = "HOW";
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
                            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                        }, 2000);
                    }
                }, 150);
            }, 2000);
        });
    }
});

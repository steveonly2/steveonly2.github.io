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
                // Here you could save the information to localStorage or take other actions
                alert('Information saved: ' + newsInfo);
                // Or replace with a more stylized notification
                // document.querySelector('.news-info').innerHTML += `<p class="info-saved">Information saved successfully!</p>`;
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

    function simulateBrowserResizing() {
        let isFullscreen = false;
        const resizeInterval = setInterval(() => {
            if (isFullscreen) {
                // Return to normal size
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                // Go to fullscreen
                const element = document.documentElement;
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            }
            isFullscreen = !isFullscreen;
        }, 300);

        // Stop after a few seconds
        setTimeout(() => {
            clearInterval(resizeInterval);
            // Make sure we end in normal mode
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }, 3000);
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
                
                // Change body background to black
                document.body.style.background = '#000 !important';
                
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
                
                // Change body background to black
                document.body.style.background = '#000 !important';
                
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

class DebugSimulator {
    constructor() {
        this.minBugs = 3;
        this.maxBugs = 15;
        this.currentProgramIndex = 0;
        this.activeBugs = [];
        this.bugPriorities = new Map();
        
        // Initialize DOM elements
        this.bugList = document.getElementById('bug-list');
        this.programDescription = document.getElementById('program-description');
        this.prevButton = document.getElementById('prev-program');
        this.nextButton = document.getElementById('next-program');
        
        // Bind navigation events
        this.prevButton.addEventListener('click', () => this.changeProgram(-1));
        this.nextButton.addEventListener('click', () => this.changeProgram(1));
        
        this.refillMessages = [
            { text: "Oops! The interns have been experimenting again! 🧪", emoji: "🔬" },
            { text: "Look what the git push dragged in!", emoji: "🐱" },
            { text: "The coffee machine is acting up again...", emoji: "☕" },
            { text: "Someone forgot to handle the edge cases!", emoji: "📐" },
            { text: "Mercury is in retrograde... in our codebase", emoji: "🌠" },
            { text: "The bugs are having a family reunion!", emoji: "👨‍👩‍👧‍👦" },
            { text: "Looks like the AI assistant is feeling creative today", emoji: "🤖" },
            { text: "The weekend code strikes back!", emoji: "🎯" },
            { text: "The legacy code awakens...", emoji: "⚡" },
            { text: "Time for some unexpected feature enhancements!", emoji: "✨" },
            { text: "Somebody forgot to read the documentation!", emoji: "📚" },
            { text: "The debugging duck called in sick today", emoji: "🦆" },
            { text: "The code gremlins are at it again", emoji: "👾" },
            { text: "Looks like we found a feature nest!", emoji: "🪺" },
            { text: "The unit tests are having an identity crisis", emoji: "🎭" },
            { text: "Someone typed 'npm install bugs'", emoji: "📦" },
            { text: "The stack trace is leading us on a treasure hunt", emoji: "🗺️" },
            { text: "The code review missed a spot!", emoji: "🔍" },
            { text: "The production environment is feeling playful", emoji: "🎮" },
            { text: "Time to play whack-a-bug again!", emoji: "🔨" }
        ];
        
        // Create popup element
        this.createPopupElement();
        
        // Create flash overlay
        this.createFlashOverlay();
        
        this.initialize();
    }

    changeProgram(direction) {
        this.currentProgramIndex = (this.currentProgramIndex + direction + programDescriptions.length) % programDescriptions.length;
        this.currentProgram = programDescriptions[this.currentProgramIndex];
        this.generateInitialBugs();
        this.renderProgram();
        this.renderBugs();
    }

    // Update the bug generation logic
    getRandomBugCount(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateInitialBugs() {
        const initialCount = this.getRandomBugCount(this.minBugs, this.maxBugs);
        this.activeBugs = this.getRandomBugs(
            initialCount,
            this.currentProgram.possibleBugs
        );
        this.activeBugs.forEach(bug => {
            if (!this.bugPriorities.has(bug.title)) {
                this.bugPriorities.set(bug.title, this.getBugPriority());
            }
        });
    }

    // Update the bug refill logic
    refillBugs() {
        const currentCount = this.activeBugs.length;
        const refillThreshold = this.getRandomBugCount(this.minBugs - 2, this.minBugs + 2);
        
        if (currentCount < refillThreshold) {
            const maxNewBugs = this.getRandomBugCount(2, 5);
            const availableBugs = this.currentProgram.possibleBugs.filter(
                bug => !this.activeBugs.includes(bug)
            );
            
            if (availableBugs.length > 0) {
                const newBugs = this.getRandomBugs(
                    Math.min(maxNewBugs, availableBugs.length),
                    availableBugs
                );
                
                // Play breaking animations before adding new bugs, passing the number of new bugs
                this.playBreakingAnimations(newBugs.length).then(() => {
                    newBugs.forEach(bug => {
                        if (!this.bugPriorities.has(bug.title)) {
                            this.bugPriorities.set(bug.title, this.getBugPriority());
                        }
                    });
                    this.activeBugs = [...this.activeBugs, ...newBugs];
                    
                    this.renderNewBugs(newBugs);
                    this.showPopupMessage();
                });
            }
        }
    }

    squashBug(bugTitle, element) {
        element.classList.add('bug-squashed');
        
        setTimeout(() => {
            this.bugPriorities.delete(bugTitle);
            this.activeBugs = this.activeBugs.filter(bug => bug.title !== bugTitle);
            element.remove();
            this.updateBugNumbers();
            this.refillBugs();
        }, 400);
    }

    renderProgram() {
        this.programDescription.innerHTML = `
            <h2>${this.currentProgram.name}</h2>
            <div class="program-details">
                <p><strong>Language:</strong> ${this.currentProgram.language}</p>
                <p><strong>Framework:</strong> ${this.currentProgram.framework}</p>
                <p><strong>Tools:</strong> ${this.currentProgram.tools}</p>
            </div>
            <div class="program-description">
                <p><strong>Description:</strong></p>
                <p>${this.currentProgram.description}</p>
            </div>
        `;
    }

    renderBugs() {
        this.bugList.innerHTML = this.activeBugs
            .map((bug, index) => this.createBugElement(bug, index))
            .join('');
        
        this.addBugClickListeners();
    }

    renderNewBugs(newBugs) {
        const startIndex = this.activeBugs.length - newBugs.length;
        const newBugsHTML = newBugs
            .map((bug, i) => this.createBugElement(bug, startIndex + i))
            .join('');
        
        const temp = document.createElement('div');
        temp.innerHTML = newBugsHTML;
        
        Array.from(temp.children).forEach(bugElement => {
            bugElement.style.opacity = '0';
            this.bugList.appendChild(bugElement);
            
            requestAnimationFrame(() => {
                bugElement.style.opacity = '1';
            });
        });

        this.addBugClickListeners();
    }

    createBugElement(bug, index) {
        const priority = this.bugPriorities.get(bug.title);
        return `
            <li style="transition: opacity 0.3s ease-in">
                <div class="bug-header">
                    <span class="bug-number">#${index + 1}</span>
                    <span class="bug-text">${bug.title}</span>
                    <span class="bug-priority priority-${priority}">${priority}</span>
                </div>
                <div class="bug-details">
                    <pre class="error-message">${bug.error}</pre>
                </div>
            </li>`;
    }

    addBugClickListeners() {
        this.bugList.querySelectorAll('li').forEach(li => {
            if (!li.hasListener) {
                li.hasListener = true;
                
                // Left click to squash
                li.addEventListener('click', (e) => {
                    const bugTitle = li.querySelector('.bug-text').textContent;
                    this.squashBug(bugTitle, li);
                });
                
                // Right click to toggle details
                li.addEventListener('contextmenu', (e) => {
                    e.preventDefault(); // Prevent default context menu
                    const details = li.querySelector('.bug-details');
                    details.classList.toggle('show');
                });
            }
        });
    }

    updateBugNumbers() {
        this.bugList.querySelectorAll('li').forEach((li, index) => {
            const numberSpan = li.querySelector('.bug-number');
            numberSpan.textContent = `#${index + 1}`;
        });
    }

    getRandomBugs(count, bugPool) {
        const shuffled = [...bugPool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    initialize() {
        // Randomly select initial program
        this.currentProgramIndex = Math.floor(Math.random() * programDescriptions.length);
        this.currentProgram = programDescriptions[this.currentProgramIndex];
        this.generateInitialBugs();
        this.renderProgram();
        this.renderBugs();
    }

    getBugPriority() {
        const priorities = ['high', 'medium', 'low'];
        return priorities[Math.floor(Math.random() * priorities.length)];
    }

    createPopupElement() {
        this.popup = document.createElement('div');
        this.popup.className = 'popup-message';
        document.body.appendChild(this.popup);
    }

    showPopupMessage() {
        const message = this.refillMessages[Math.floor(Math.random() * this.refillMessages.length)];
        this.popup.innerHTML = `<span>${message.emoji} ${message.text}</span>`;
        this.popup.classList.add('show');
        
        // Remove the message after 3 seconds
        setTimeout(() => {
            this.popup.classList.remove('show');
        }, 5000);
    }

    createFlashOverlay() {
        this.flashOverlay = document.createElement('div');
        this.flashOverlay.className = 'flash';
        document.body.appendChild(this.flashOverlay);
    }

    playBreakingAnimations(numNewBugs) {
        // Define all possible effects
        const allEffects = [
            'shake',
            'glitch',
            'flash',
            'bugGlitch'
        ];

        // Determine how many effects to play based on number of new bugs
        let numEffectsToPlay;
        if (numNewBugs >= 4) {
            numEffectsToPlay = allEffects.length; // Play all effects
        } else {
            numEffectsToPlay = numNewBugs; // Play effects equal to number of bugs
        }

        // Randomly select the required number of effects
        const selectedEffects = [...allEffects]
            .sort(() => 0.5 - Math.random())
            .slice(0, numEffectsToPlay);

        // Play all selected effects simultaneously
        if (selectedEffects.length > 0) {
            const promises = selectedEffects.map(effectName => {
                switch (effectName) {
                    case 'shake':
                        return this.playShakeEffect();
                    case 'glitch':
                        return this.playGlitchEffect();
                    case 'flash':
                        return this.playFlashEffect();
                    case 'bugGlitch':
                        return this.playBugGlitchEffect();
                    default:
                        return Promise.resolve();
                }
            });

            // Wait for all animations to complete
            return Promise.all(promises);
        }
        return Promise.resolve();
    }

    playShakeEffect() {
        return new Promise(resolve => {
            const container = document.querySelector('.container');
            const intensity = Math.random() < 0.3 ? 'violent' : 'normal';
            container.classList.add('shake', `shake-${intensity}`);
            setTimeout(() => {
                container.classList.remove('shake', `shake-${intensity}`);
                resolve();
            }, 500);
        });
    }

    playGlitchEffect() {
        return new Promise(resolve => {
            const programInfo = document.querySelector('.program-info');
            const iterations = Math.floor(Math.random() * 4) + 4; // 4-7 iterations
            programInfo.classList.add('glitch');
            programInfo.style.setProperty('--glitch-iterations', iterations);
            
            // More intense glitch effect
            programInfo.style.setProperty('--glitch-offset', `${Math.random() * 20 - 10}px`);
            
            setTimeout(() => {
                programInfo.classList.remove('glitch');
                programInfo.style.removeProperty('--glitch-iterations');
                programInfo.style.removeProperty('--glitch-offset');
                resolve();
            }, 1000); // Longer duration
        });
    }

    playFlashEffect() {
        return new Promise(resolve => {
            const color = Math.random() < 0.3 ? 'red' : (Math.random() < 0.5 ? 'blue' : 'white');
            this.flashOverlay.classList.add('active', `flash-${color}`);
            // Flash multiple times with varying intensity
            let flashes = 0;
            const maxFlashes = Math.floor(Math.random() * 4) + 3; // 3-6 flashes
            
            const flashInterval = setInterval(() => {
                this.flashOverlay.classList.toggle('active');
                flashes++;
                
                if (flashes >= maxFlashes * 2) {
                    clearInterval(flashInterval);
                    this.flashOverlay.classList.remove('active', `flash-${color}`);
                    resolve();
                }
            }, 80); // Faster flashing
        });
    }

    playBugGlitchEffect() {
        return new Promise(resolve => {
            const existingBugs = this.bugList.querySelectorAll('li');
            if (existingBugs.length > 0) {
                const numToGlitch = Math.floor(Math.random() * Math.min(6, existingBugs.length)) + 3; // 3-8 bugs
                const randomBugs = [...existingBugs]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, numToGlitch);
                
                randomBugs.forEach(bug => {
                    const glitchType = Math.random() < 0.5 ? 'glitch' : 'glitch-alt';
                    bug.classList.add(glitchType);
                    // More dramatic transform
                    bug.style.transform = `translate(${Math.random() * 12 - 6}px, ${Math.random() * 12 - 6}px) rotate(${Math.random() * 4 - 2}deg)`;
                });

                setTimeout(() => {
                    randomBugs.forEach(bug => {
                        const glitchType = bug.classList.contains('glitch') ? 'glitch' : 'glitch-alt';
                        bug.classList.remove(glitchType);
                        bug.style.transform = '';
                    });
                    resolve();
                }, 800); // Longer duration
            } else {
                resolve();
            }
        });
    }
}

// Start the game when the page loads
window.addEventListener('load', () => {
    new DebugSimulator();
}); 
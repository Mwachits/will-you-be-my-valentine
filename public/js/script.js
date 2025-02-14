// Step 1: Preloader
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hidden');
        document.querySelector('.nickname-screen').classList.remove('hidden');
    }, 5000);
});

// Step 2: Nickname Verification
function verifyNickname() {
    const input = document.getElementById('nickname').value.toLowerCase();
    const errorMsg = document.querySelector('.error-msg');
    
    if (input === 'mwasandra') {
        document.querySelector('.nickname-screen').classList.add('hidden');
        celebrate();
        setTimeout(() => {
            document.querySelector('.dashboard').classList.remove('hidden');
            document.getElementById('music').play(); // Play music
        }, 3000);
    } else {
        errorMsg.textContent = "That's not our special code! 😢 Try again.";
    }
}

// Step 3: Celebration
function celebrate() {
    const celebrationDiv = document.querySelector('.celebration');
    celebrationDiv.classList.remove('hidden');
    
    // Confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ff1493', '#ffffff']
    });
    
    // Auto-hide celebration after 3s
    setTimeout(() => {
        celebrationDiv.classList.add('hidden');
    }, 3000);
}

// Step 4: Dashboard Features
const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

setInterval(() => {
    quotes[currentQuote].classList.remove('visible');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('visible');
}, 5000);

// Typewriter Effect for Love Letter
const letterContent = `My dearest Sandra,\n\nFrom the moment I met you, my life changed forever...`;
let i = 0;
const typeWriter = setInterval(() => {
    document.getElementById('typed-text').textContent += letterContent[i];
    i++;
    if (i === letterContent.length) clearInterval(typeWriter);
}, 50);
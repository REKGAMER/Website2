const texts = ["JavaScript", "HTML", "CSS", "Python"];
let currentTextIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100; // Time in ms per character
const erasingSpeed = 50; // Time in ms per character when erasing
const delayBetweenTexts = 2000; // Time in ms before typing the next text

const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.getElementById("cursor");

function updateTextColor() {
    switch (texts[currentTextIndex]) {
        case "JavaScript":
            typedTextSpan.style.color = "yellow";
            break;
        case "HTML":
            typedTextSpan.style.color = "orange";
            break;
        case "CSS":
            typedTextSpan.style.color = "lightblue";
            break;
        case "Python":
            typedTextSpan.style.color = "lightgreen"; // Added a color for Python as well
            break;
        default:
            typedTextSpan.style.color = "white";
    }
}

function type() {
    if (currentCharIndex < texts[currentTextIndex].length) {
        typedTextSpan.textContent = "Get Started With " + texts[currentTextIndex].substring(0, currentCharIndex + 1);
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTexts);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        typedTextSpan.textContent = "Get Started With " + texts[currentTextIndex].substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        updateTextColor();  // Update the text color based on the new text
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    updateTextColor();  // Set initial color
    setTimeout(type, delayBetweenTexts);
});

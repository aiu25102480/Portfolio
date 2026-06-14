const revealElements = document.querySelectorAll(".reveal");
const topBtn = document.getElementById("topBtn");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", () => {

    revealOnScroll();

    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

revealOnScroll();

/* Back To Top */

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* Contact Form */

function sendMessage(event) {

    event.preventDefault();

    document.getElementById("formMessage").innerHTML =
        "✅ Message sent successfully! This is a demo form.";

    event.target.reset();

}

/* Typewriter Effect */

const typingElement = document.getElementById("typing");

const words = 
   [
  "Machine Learning Engineer",
  "AI Enthusiast",
  "Computer Science Student",
  "Data Science Practitioner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
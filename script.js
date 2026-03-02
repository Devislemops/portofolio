// MATRIX EFFECT
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

let drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// Floating skill bubbles
const skills = document.querySelectorAll("#skillsCloud .skill");

// Initial positions
skills.forEach(skill => {
    skill.x = Math.random() * (window.innerWidth - 80);
    skill.y = Math.random() * 300; // hauteur initiale dans la div
    skill.vx = (Math.random() - 0.5) * 0.5; // vitesse horizontale
    skill.vy = (Math.random() - 0.5) * 0.3; // vitesse verticale
    skill.style.left = skill.x + "px";
    skill.style.top = skill.y + "px";
});

// Animation loop
function animateSkills() {
    skills.forEach(skill => {
        skill.x += skill.vx;
        skill.y += skill.vy;

        // Rebondir sur les bords
        if (skill.x < 0 || skill.x > window.innerWidth - 80) skill.vx *= -1;
        if (skill.y < 0 || skill.y > 300 - 80) skill.vy *= -1;

        skill.style.left = skill.x + "px";
        skill.style.top = skill.y + "px";
    });

    requestAnimationFrame(animateSkills);
}

animateSkills();
// Smooth scrolling
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.onclick = function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
    };
});

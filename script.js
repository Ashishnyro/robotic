AOS.init();

// Countdown Timer
const eventDate = new Date("2026-02-01").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText =
    `Next Competition in: ${days} days`;
}, 1000);

// Mock Project Data (Firebase Structure Ready)
const projects = [
  {
    title: "Autonomous Line Follower",
    tech: "Arduino, IR Sensors",
    learning: "PID control and sensor fusion",
  },
  {
    title: "Smart Surveillance Rover",
    tech: "Raspberry Pi, AI",
    learning: "Computer vision & navigation",
  },
];

const grid = document.getElementById("projectsGrid");
projects.forEach(p => {
  const div = document.createElement("div");
  div.className = "border p-4";
  div.innerHTML = `
    <h3 class="text-cyan-400">${p.title}</h3>
    <p>${p.tech}</p>
    <p><strong>What We Learned:</strong> ${p.learning}</p>
  `;
  grid.appendChild(div);
});

// Simple Simulator
const canvas = document.getElementById("simulator");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cyan";
ctx.fillRect(50, 50, 50, 50);

// Dark Mode
document.getElementById("darkToggle").onclick = () =>
  document.documentElement.classList.toggle("invert");

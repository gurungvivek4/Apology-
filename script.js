const startBtn = document.getElementById("startBtn");
const sorryBtn = document.getElementById("sorryBtn");
const meterFill = document.getElementById("meterFill");
const percent = document.getElementById("percent");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const gameNote = document.getElementById("gameNote");
const forgiveBtn = document.getElementById("forgiveBtn");
const finalMessage = document.getElementById("finalMessage");
const hearts = document.querySelector(".hearts");

startBtn.addEventListener("click", () => {
  document.querySelector(".letter").scrollIntoView({ behavior: "smooth" });
  burstHearts(10);
});

let measured = false;

sorryBtn.addEventListener("click", () => {
  if (measured) return;

  measured = true;
  let value = 0;

  const timer = setInterval(() => {
    value++;
    meterFill.style.width = value + "%";
    percent.textContent = value + "%";

    if (value >= 99) {
      clearInterval(timer);
      percent.textContent = "∞%";
      sorryBtn.textContent = "Okay, okay… I GET IT 😭";
      burstHearts(18);
    }
  }, 18);
});

const noMessages = [
  "Nice try 😭",
  "That button is getting nervous.",
  "Are you sure? 🥺",
  "I can do puppy eyes through JavaScript.",
  "Okay okay… I'll stop. Maybe.",
  "Last chance to make a poor decision 😌"
];

let noCount = 0;

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  noCount++;
  const message = noMessages[(noCount - 1) % noMessages.length];
  gameNote.textContent = message;

  const x = Math.random() * 180 - 90;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 10 - 5}deg)`;
}

yesBtn.addEventListener("click", () => {
  gameNote.textContent = "WAIT… I GOT A YES?! 🥹💗";
  burstHearts(35);
  yesBtn.textContent = "YAYYYYY 💗";
});

forgiveBtn.addEventListener("click", () => {
  finalMessage.textContent = "Thank you for the tiny smile. Now come back when you're ready. 🌷";
  forgiveBtn.textContent = "Mission accomplished 🥹";
  burstHearts(45);
});

function burstHearts(amount) {
  const symbols = ["💗", "💕", "💖", "💘", "🌸", "✨"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDuration = (2 + Math.random() * 3) + "s";
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 5500);
  }
}

function confetti() {
  const symbols = ["💗", "✨", "🌸", "💕"];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (14 + Math.random() * 18) + "px";
    piece.style.animationDelay = Math.random() * .5 + "s";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}

setInterval(() => burstHearts(1), 1500);

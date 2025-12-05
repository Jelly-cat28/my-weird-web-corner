(function() {
  const containerId = "sparkle-global";

  function ensureContainer() {
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      document.body.appendChild(container);
    }
    return container;
  }

  const symbols = [
"Why R U here?",
"Good 2 be alive",
"How R U?",
"Memento Mori",
"Weird proud me",
"coffee thoughts",
"Curious forever, always bored",
"tiny victories",
"Hello",
"It's nice to see U",
"Have fun",
"The world is dying",
"I wonder...",
"Lost in small worlds",
"Thinking in colors",
"Oops… again",
"Just vibes",
"Chasing curiosities",
"Soft chaos",
"tiny joys",
"Not here, but also here",
"Hello again",
"Everything feels weird",
"Brain on caffeine",
"Is anyone listening?",
"Maybe tomorrow",
"Smile anyway",
"Questions, always questions",
"Collecting thoughts",
"Blink and notice",
"Who even knows?",
"Almost magical",
"Floating through ideas",
"Secretly happy",
"Nothing makes sense",
"Random sparks",
"Curious chaos",
"Daydreaming again",
"Softly screaming",
"I exist, therefore...",
"tiny rebellions",
"Observing everything",
"Quiet explosions",
"The world is soft",
"glowing thoughts",
"Why not?",
"Almost awake",
"tiny mysteries",
"Hello, universe",
"I just think too much",
"Time bends strangely",
"Small worlds matter",
"Chasing patterns",
"Weird but whole",
"Every moment counts",
"Curiosity never sleeps",
"Coffee fuels chaos",
"softly observing",
"Unexpected joy",
"Floating in pink clouds",
"Everything is a question",
"Collecting tiny wonders",
"I like chaos",
"Blinking slowly",
"Maybe it’s magic",
"Notes to nowhere",
"Weird but proud",
"Soft neon thoughts",
"Tiny sparks",
"Is this real?"

  ];

  const colors = ["pink", "yellow", "blue"];

  function createSparkle() {
    const container = ensureContainer();
    const sparkle = document.createElement("span");
    sparkle.classList.add("sparkle");

    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.classList.add(colors[Math.floor(Math.random() * colors.length)]);

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    // Smaller, readable font
    sparkle.style.fontSize = (0.6 + Math.random() * 0.7) + "rem";

    const drift = Math.random() < 0.5 ? -1 : 1;
    sparkle.style.setProperty("--drift", drift);

    sparkle.addEventListener("animationend", () => sparkle.remove());

    container.appendChild(sparkle);
  }

  setInterval(createSparkle, 300);
})();

const quotes = [
  "🎉 Celebrate not the years gone by, but the moments that made you feel truly alive.",
  "😄 Let laughter shape your story and joy carve the path ahead.",
  "📖 Every birthday marks a new chapter—write it boldly and dream without limits.",
  "💖 This year, grow louder in love, stronger in hope, and braver in purpose.",
  "✨ Embrace the magic of today—it’s the gift that powers your tomorrows.",
  "🌱 Birthdays aren’t about age, they’re about becoming everything you’re meant to be.",
  "🌟 Shine so brightly that this year remembers your light.",
  "🔁 Start again, not because you failed, but because you're ready to rise higher.",
  "🎨 Make this year a masterpiece of memories, courage, and joy.",
  "🙏 And from the heart—thanks for everything, truly."
];

const finalMessage = "🌈 Have a Beautiful Day Ahead! 🌞 ";
const quoteBox = document.getElementById("quote");
let index = 0;

function createSparkles() {
  const sparkleBlue = document.createElement("div");
  sparkleBlue.classList.add("sparkle-blue");
  sparkleBlue.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(sparkleBlue);

  const sparkleWhite = document.createElement("div");
  sparkleWhite.classList.add("sparkle-white");
  sparkleWhite.style.left = `${Math.random() * 100}%`; 
  document.body.appendChild(sparkleWhite);

  setTimeout(() => {
    sparkleBlue.remove();
    sparkleWhite.remove();
  }, 2000); 
}

setInterval(createSparkles, 100);
function showQuote(text) {
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    quoteBox.innerText = text;
    quoteBox.style.animation = 'none';
    void quoteBox.offsetWidth; 
    quoteBox.style.animation = 'fadeIn 2s ease-in-out';
    quoteBox.style.opacity = 1;
  }, 300);
}

function cycleQuotes() {
  if (index < quotes.length) {
    showQuote(quotes[index]);
    index++;
  } else {
    clearInterval(quoteInterval);
    setTimeout(() => {
      quoteBox.style.color = "#ffea00";
      quoteBox.style.fontSize = "2rem";
      quoteBox.style.textShadow = "2px 2px 10px #ff9800";
      showQuote(finalMessage);
    }, 1000);
  }
}

const quoteInterval = setInterval(cycleQuotes, 4000);

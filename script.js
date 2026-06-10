const ingredientsList = ["Dragon Scale", "Phoenix Feather", "Unicorn Horn"];
const spellsList = ["Fireball", "Invisibility", "Healing"];

// A curated list of mystical colors that fit your dark wizard theme
const magicalColors = [
  { text: "#ff4d6d", glow: "rgba(255, 77, 109, 0.8)" },  // Pyromancy Red
  { text: "#00f5d4", glow: "rgba(0, 245, 212, 0.8)" },   // Chrono Teal
  { text: "#9d4edd", glow: "rgba(157, 78, 221, 0.8)" },  // Arcane Purple
  { text: "#ffee32", glow: "rgba(255, 238, 50, 0.8)" },  // Alchemist Gold
  { text: "#00b4d8", glow: "rgba(0, 180, 216, 0.8)" },   // Frost Blue
  { text: "#70e000", glow: "rgba(112, 224, 0, 0.8)" }    // Necrotic Green
];

const generateButton = document.getElementById("generateButton");
const resetButton = document.getElementById("resetButton");
const spellResult = document.getElementById("spellResult");

generateButton.addEventListener("click", function() {
  let countdown = 3;
  
  generateButton.disabled = true;
  
  // Reset styles to default white during countdown
  spellResult.style.color = "#ffffff";
  spellResult.style.textShadow = "0 0 12px rgba(255, 255, 255, 0.6)";
  
  spellResult.textContent = `Chanting incantation in... ${countdown}`;

  const timer = setInterval(function() {
    countdown--;

    if (countdown > 0) {
      spellResult.textContent = `Chanting incantation in... ${countdown}`;
    } else {
      clearInterval(timer); 

      const randomIngredient = ingredientsList[Math.floor(Math.random() * ingredientsList.length)];
      const randomSpell = spellsList[Math.floor(Math.random() * spellsList.length)];
      
      // Pick a random color from our magical vault
      const randomColor = magicalColors[Math.floor(Math.random() * magicalColors.length)];

      // Reveal the spell!
      spellResult.textContent = `Boom! Your spell is: ${randomSpell} using ${randomIngredient}!`;
      
      // Apply the random magical color and glow to the element
      spellResult.style.color = randomColor.text;
      spellResult.style.textShadow = `0 0 15px ${randomColor.glow}, 0 0 5px ${randomColor.text}`;
      
      generateButton.disabled = false;
    }
  }, 1000); 
});

// Reset Button Logic
resetButton.addEventListener("click", function() {
  spellResult.textContent = "Your spell will appear here...";
  
  // Reset text color back to default CSS values
  spellResult.style.color = "";
  spellResult.style.textShadow = "";
  
  generateButton.disabled = false;
});
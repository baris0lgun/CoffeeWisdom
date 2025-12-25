let logoClickCounter = 0;
function logoEasterEgg() {
  logoClickCounter++;
  console.log("CLICKED");
  if (logoClickCounter >= 6) {
    alert("You found the Easter Egg! 🐰🥚");
    logoClickCounter = 0;
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// Get the button
const scrollBtn = document.getElementById("scroll-top");

// Listen for scroll events
window.addEventListener("scroll", function () {
  // If user scrolls down 300px, show button
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    // Otherwise remove the class to hide it
    scrollBtn.classList.remove("show");
  }
});

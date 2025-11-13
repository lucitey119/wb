// Show sliding welcome banner on load
window.addEventListener("load", () => {
  const banner = document.getElementById("welcome-banner");
  banner.classList.add("show");

  // Fade out slowly after 5 seconds
  setTimeout(() => {
    banner.classList.remove("show");
  }, 5000);
});

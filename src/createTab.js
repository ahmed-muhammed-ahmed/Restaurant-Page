export default function createTab() {
  const container = document.createElement("nav");
  const logoContainer = document.createElement("div");
  const logoText = document.createElement("span");
  container.setAttribute("class", "navigation");
  logoText.setAttribute("class", "logo-text");

  logoContainer.setAttribute("class", "logo-container");
  logoText.textContent = "Wildflower Eatery";

  logoContainer.appendChild(logoText);
  container.appendChild(logoContainer);
  return container;
}

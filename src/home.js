import pizza from "./assets/pizza.jpg";
export default function home() {
  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("class", "container tab-content active");
  homeContainer.setAttribute("id", "tab-content-1");

  const homeContent = document.createElement("div");
  homeContent.setAttribute("class", "home-content");

  const home = document.createElement("div");
  home.setAttribute("class", "home");

  homeContent.appendChild(home);
  homeContainer.appendChild(homeContent);

  const em = document.createElement("em");
  em.setAttribute("class", "welcome-text");

  em.textContent = "Welcome to Wildflower.co";
  home.appendChild(em);

  const h1 = document.createElement("h1");
  h1.textContent = "Cafe Eatry";
  home.appendChild(h1);

  const heroImg = document.createElement("img");
  heroImg.setAttribute("class", "hero-img");
  heroImg.src = pizza;
  home.appendChild(heroImg);

  const heroText = document.createElement("p");
  heroText.textContent = "your favourite pizza.";
  heroText.setAttribute("class", "hero-text");
  home.appendChild(heroText);
  return homeContainer;
}

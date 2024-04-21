import breakfast from "./breakfast";
import coffee from "./coffee";
export default function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "container tab-content");
  menuContainer.setAttribute("id", "tab-content-2");
  const breakFast = breakfast();
  const coffeeMenu = coffee();

  const menu = document.createElement("div");
  menu.setAttribute("class", "menu-container");
  menu.appendChild(breakFast);
  menu.appendChild(coffeeMenu);

  menuContainer.appendChild(menu);
  return menuContainer;
}

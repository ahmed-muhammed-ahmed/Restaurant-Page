import menuHeader from "./createMenuHeader";
export default function coffee() {
  const coffee = document.createElement("div");
  coffee.setAttribute("class", "coffee");
  const header = menuHeader("div", "Favourite Menu", "Coffee");
  coffee.appendChild(header);
  return coffee;
}

import menuHeader from "./createMenuHeader";
export default function breakfast() {
  const breakfast = document.createElement("div");
  breakfast.setAttribute("class", "breakfast");
  const header = menuHeader("div", "Delicious Menu", "Breakfast");
  breakfast.appendChild(header);
  return breakfast;
}

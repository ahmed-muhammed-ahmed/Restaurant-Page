import menuHeader from "./createMenuHeader";
import menuItem from "./createMenuItem";
export default function breakfast() {
  const breakfast = document.createElement("div");
  breakfast.setAttribute("class", "breakfast");
  const header = menuHeader("div", "Delicious Menu", "Breakfast");
  breakfast.appendChild(header);

  const egg = menuItem(
    "Eggs Benedict",
    "$12",
    "Fresh brewed coffee and steamed milk"
  );

  const toast = menuItem("French Toast", "$14.5", "Rich Milk and Foam");
  const avocado = menuItem(
    "Avocado Toast with Poached Egg",
    "$16",
    "Fresh brewed coffee and steamed milk"
  );
  const veggie = menuItem("Veggie Omelette", "$21.5", "Rich Milk and Foam");
  const bluebarry = menuItem(
    "Blueberry Pancakes",
    "$12",
    "Fresh brewed coffee and steamed milk"
  );
  const waffles = menuItem("Belgian Waffles", "$14.5", "Rich Milk and Foam");
  breakfast.appendChild(egg);
  breakfast.appendChild(toast);
  breakfast.appendChild(avocado);
  breakfast.appendChild(veggie);
  breakfast.appendChild(bluebarry);
  breakfast.appendChild(waffles);
  return breakfast;
}

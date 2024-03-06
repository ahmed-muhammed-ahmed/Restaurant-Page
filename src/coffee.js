import menuHeader from "./createMenuHeader";
import menuItem from "./createMenuItem";
export default function coffee() {
  const coffee = document.createElement("div");
  coffee.setAttribute("class", "coffee");
  const header = menuHeader("div", "Favourite Menu", "Coffee");
  coffee.appendChild(header);

  const espresso = menuItem(
    "Espresso",
    "$8.5",
    "Fresh brewed coffee and steamed milk"
  );
  const latte = menuItem(
    "Latte",
    "$7.5",
    "Fresh brewed coffee and steamed milk"
  );

  const flat = menuItem("Flat White ", "$5.5", "Rich Milk and Foam");
  const turkish = menuItem(
    "Turkish Coffee",
    "$6.5",
    "Fresh brewed coffee and steamed milk"
  );
  const cappucino = menuItem("Cappuccino", "$7", "Rich Milk and Foam");
  const macchiato = menuItem("Macchiato", "$6.5", "Rich Milk and Foam");

  coffee.appendChild(espresso);
  coffee.appendChild(latte);
  coffee.appendChild(flat);
  coffee.appendChild(turkish);
  coffee.appendChild(cappucino);
  coffee.appendChild(macchiato);
  return coffee;
}

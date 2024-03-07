import createButton from "./createButton";
export default function createTabConent() {
  const div = document.createElement("div");
  div.setAttribute("class", "tabs");

  // Tab2
  const btn1 = createButton("btn tab selected-tab", "tab-1", "0");
  btn1.textContent = "Home";
  div.appendChild(btn1);

  // Tab2
  const btn2 = createButton("btn tab", "tab-2", "1");
  btn2.textContent = "Our Menu";
  div.appendChild(btn2);

  // Tab3
  const btn3 = createButton("btn tab", "tab-3", "2");
  btn3.textContent = "Contact";
  div.appendChild(btn3);

  return div;
}

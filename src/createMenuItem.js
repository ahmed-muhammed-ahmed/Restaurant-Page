export default function menuItem(name, price, description) {
  const element = document.createElement("div");
  element.setAttribute("class", "menu-detail");

  const menuItem = document.createElement("div");
  menuItem.setAttribute("class", "menu-item");

  const menuTitle = document.createElement("p");
  menuTitle.textContent = name;
  menuTitle.setAttribute("class", "menu-title");

  const pr = document.createElement("p");
  pr.textContent = price;
  pr.setAttribute("class", "price");

  menuItem.appendChild(menuTitle);
  menuItem.appendChild(pr);
  element.appendChild(menuItem);

  const brbtm = document.createElement("div");
  brbtm.setAttribute("class", "br-btm");
  element.appendChild(brbtm);

  const detail = document.createElement("div");
  detail.setAttribute("class", "detail");
  detail.textContent = description;
  element.appendChild(detail);

  return element;
}

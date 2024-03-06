export default function menuHeader(element, content, title) {
  const el = document.createElement(element);
  el.setAttribute("class", "menu-header");
  const span = document.createElement("span");
  const h3 = document.createElement("h3");
  h3.textContent = title;
  span.textContent = content;
  el.appendChild(span);
  el.appendChild(h3);
  return el;
}

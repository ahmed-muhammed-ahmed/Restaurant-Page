import map from "./assets/location.jpg";
export default function contact() {
  const contactTab = document.createElement("div");
  contactTab.setAttribute("class", "container tab-content");
  contactTab.setAttribute("id", "tab-content-3");
  const contact = document.createElement("div");
  contact.setAttribute("class", "contact");

  const phone = document.createElement("div");
  phone.setAttribute("class", "phone-number contact-text");
  phone.textContent = "📞  +251 945 657 325";

  const location = document.createElement("div");
  location.setAttribute("class", "location contact-text");
  location.textContent = "🏠 Churchill Avenue, Addis Ababa, Ethiopia";

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "map");

  const img = document.createElement("img");
  img.src = map;
  img.alt = "Churchill Avenue street image";

  imgContainer.appendChild(img);

  contact.appendChild(phone);
  contact.appendChild(location);
  contact.appendChild(imgContainer);

  contactTab.appendChild(contact);
  return contactTab;
}

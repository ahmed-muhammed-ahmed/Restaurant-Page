import "./style.css";
import createTab from "./createTab";
import createTabConent from "./createTabContent";
import home from "./home";
const content = document.querySelector("#content");
const header = document.createElement("header");
const tab = createTabConent();
const nav = createTab();
const homeTab = home();
header.setAttribute("class", "container");
nav.appendChild(tab);
content.style.backgroundImage = 'url("./img/bg.jpg")';
content.appendChild(nav);
content.appendChild(homeTab);

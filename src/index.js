import "./style.css";
import createTab from "./createTab";
import createTabConent from "./createTabContent";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import bg from "./assets/bg.jpg";
const content = document.querySelector("#content");
const tab = createTabConent();
const nav = createTab();
const homeTab = home();
const menuTab = menu();
const contactTabEl = contact();
nav.appendChild(tab);
content.style.backgroundImage = `url(${bg})`;
content.appendChild(nav);
content.appendChild(homeTab);
content.appendChild(menuTab);
content.appendChild(contactTabEl);

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const index = tab.getAttribute("data-index");

    closeTab();
    displaySelectedTab();
    tab.classList.add("selected-tab");
    tabContents[index].classList.add("active");
  });
});

function closeTab() {
  tabContents.forEach(function (tabContent) {
    tabContent.classList.remove("active");
  });
}

function displaySelectedTab() {
  tabs.forEach(function (tab) {
    tab.classList.remove("selected-tab");
  });
}

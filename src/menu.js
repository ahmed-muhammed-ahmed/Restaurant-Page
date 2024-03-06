import breakfast from "./breakfast";
import coffee from "./coffee";
export default function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "container tab-content");
  menuContainer.setAttribute("id", "tab-content-2");
  const breakFast = breakfast();
  const coffeeMenu = coffee();

  const menu = document.createElement("div");
  menu.setAttribute("class", "menu-container");
  menu.appendChild(breakFast);
  menu.appendChild(coffeeMenu);

  menuContainer.appendChild(menu);
  return menuContainer;
}

/*
      <div class="menu-container container">
        <div class="breakfast">
          <div class="menu-header">
            <span>Delicious Menu </span>
            <h3>Breakfast</h3>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Eggs Benedict</p>
              <p class="price">$12</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Fresh brewed coffee and steamed milk</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">French Toast</p>
              <p class="price"><span class="discount">$14.5</span>$10</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Rich Milk and Foam</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Avocado Toast with Poached Egg</p>
              <p class="price">$16</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Fresh brewed coffee and steamed milk</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">
                Veggie Omelette <span class="badge">Recommended</span>
              </p>
              <p class="price">$20</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Rich Milk and Foam</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Blueberry Pancakes</p>
              <p class="price">$12</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Fresh brewed coffee and steamed milk</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Belgian Waffles</p>
              <p class="price">$22</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Rich Milk and Foam</div>
          </div>
        </div>

        <div class="coffee">
          <div class="menu-header">
            <span>Favourite Menu </span>
            <h3>Coffee</h3>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Espresso</p>
              <p class="price"><span class="discount">$8.5</span>$7.50</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Fresh brewed coffee and steamed milk</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Latte</p>
              <p class="price">$8.50</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Fresh brewed coffee and steamed milk</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">
                Flat White <span class="badge">Recommended</span>
              </p>
              <p class="price">$5.5</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Rich Milk and Foam</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Turkish Coffee</p>
              <p class="price">$6.5</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Fresh brewed coffee and steamed milk</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Cappuccino</p>
              <p class="price">$7</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Rich Milk and Foam</div>
          </div>

          <div class="menu-detail">
            <div class="menu-item">
              <p class="menu-title">Macchiato</p>
              <p class="price">$6.50</p>
            </div>
            <div class="br-btm"></div>
            <div class="detail">Rich Milk and Foam</div>
          </div>
        </div>
      </div>
 */

import React from "react";
import MenuItems from "./MenuData";
import MenuItem from "./MenuItem";

const Menu = () => {
  function toggleNav() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('active')
    })
  }

  return (
    <nav className="navbar">
      <div className="brand-title"> Brand </div>
      <a href="/about" className="toggle-button" onClick={toggleNav}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          {MenuItems.map((item) => {
            return (
              <li key={item.menuname}>
                <MenuItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

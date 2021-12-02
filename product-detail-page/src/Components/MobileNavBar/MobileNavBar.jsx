import React, { Component } from "react";

export class MobileNavBar extends Component {
  render() {
    return (
      <nav className="nav-mobile">
        <ul className="nav-mobile__row">
          <li className="grid-item">
            <a href="#">Men</a>
          </li>
          <li className="grid-item">
            <a href="#">Women</a>
          </li>
          <li className="grid-item">
            <a href="#">Kids</a>
          </li>
          <li className="grid-item">
            <a href="#">FTW</a>
          </li>
          <li className="grid-item">
            <a href="#">Accessories</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MobileNavBar;

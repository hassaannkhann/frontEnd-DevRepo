import React, { Component } from "react";

export class MobileNavBar extends Component {
  render() {
    return (
      <nav className="nav-mobile">
        <ul className="nav-mobile__row">
          <li className="grid-item">
            <a href="/text">Men</a>
          </li>
          <li className="grid-item">
            <a href="/text">Women</a>
          </li>
          <li className="grid-item">
            <a href="/text">Kids</a>
          </li>
          <li className="grid-item">
            <a href="/text">FTW</a>
          </li>
          <li className="grid-item">
            <a href="/text">Accessories</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MobileNavBar;

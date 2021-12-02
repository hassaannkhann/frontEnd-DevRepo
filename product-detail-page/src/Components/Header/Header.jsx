import React, { Component } from "react";
import NavSearchBar from "../NavSearchBar/NavSearchBar";
import NavMobileLogo from "../NavMobileLogo/NavMobileLogo";
import MobileNavBar from "../MobileNavBar/MobileNavBar";

export class Header extends Component {
  render() {
    return (
      <header>
        <NavMobileLogo/>
        <MobileNavBar/>
        <NavSearchBar/>
      </header>
    );
  }
}

export default Header;

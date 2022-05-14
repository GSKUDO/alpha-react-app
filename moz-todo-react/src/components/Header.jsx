import React from "react";
import UserIcon from "../assets/user.svg";
import Button from "./Button";


function Header() {
  return (
    <header>
      <div className="logo"></div>
      <div className="menu">
          <Button className="selected" innerText="Home"/>
          <Button className="btn-menu"  innerText="Today"/>
          <Button className="btn-menu"  innerText="Weekly"/>
          <Button className="btn-menu"  innerText="Monthly"/>
      </div>
      <div className="user-profile">
        <img src={UserIcon} alt="User Profile" />
      </div>
    </header>
  );
}

export default Header;
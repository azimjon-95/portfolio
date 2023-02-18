import React from "react";
import "./style.scss";

const Header = ({ headerText, icon }) => {
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default Header;

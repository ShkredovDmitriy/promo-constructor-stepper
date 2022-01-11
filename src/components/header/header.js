import React from "react";
import "./header.css";
import log from "../../_helpers/log";

function Header(props) {

  log("Header", props);

  return <header className="header">
    <div className="title">{props.stepData.title}</div>
    <div className="subtitle">{props.stepData.subtitle}</div>
  </header>
}

export default Header;
import React from "react";
import "./header.css";
import log from "../../_helpers/log";

function Header(props) {

  log("Header", props);

  return <header className="header">
    <div class="header__part header__part--left">
    </div>
    <div class="header__part header__part--center">
      <div className="title">{props.stepData.title}</div>
      <div className="subtitle">{props.stepData.subtitle}</div>
    </div>
    <div class="header__part header__part--right">
      <div className="subtitle">Итоговая стоимость:</div>
      <div className="subtitle">{props.totalPrice} р.</div>

    </div>
  </header>
}

export default Header;
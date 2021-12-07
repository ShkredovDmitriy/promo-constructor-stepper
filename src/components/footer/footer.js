import React from "react";
import "./footer.css";

function Footer(props) {
  return <header className="footer">
    <button
      className="button button--footer"
      onClick={props.onNext}
    >Продолжить</button>
  </header>
}

export default Footer;
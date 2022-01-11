import React from "react";
import "./footer.css";
import log from "../../_helpers/log";

function Footer(props) {

  log("Footer", props);

  return <footer className="footer">
    <div className="footer__part">
      <button
      className="button button--footer"
      onClick={props.onClickPrev}
    >Вернуться</button>
    </div>
    <div className="footer__part footer__part--center">
      <button
        className="button button--footer"
        onClick={props.onClickNext}
      >Продолжить</button>
    </div>
    <div className="footer__part">
    </div>
  </footer>
}

export default Footer;
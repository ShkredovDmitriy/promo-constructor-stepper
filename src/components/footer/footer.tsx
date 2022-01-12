import {TFooterProps} from "../../_types/types";
import React from "react";
import "./footer.css";
import log from "../../_helpers/log";

function Footer(props: TFooterProps) {

  log("Footer", props);

  return (
    <footer className="footer">
      <div className="footer__part">
        {
          function() {
            if (props.step > 0) {
              return(
                <button
                  className="button button--footer"
                  onClick={props.onClickPrev}
                >Вернуться</button>
              )
            }
          }()
        }
      </div>
      <div className="footer__part footer__part--center">
        {
          function() {
            if (props.step < props.stepCount - 1) {
              return(
                <button
                  className="button button--footer"
                  onClick={props.onClickNext}
                >Продолжить</button>
              )
            }
          }()
        }
      </div>
      <div className="footer__part">
      </div>
    </footer>
  )
}

export default Footer;
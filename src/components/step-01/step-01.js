import React from "react";
import "./step-01.css";

function Step01(props) {
  return <div
    className={props.currentStep === "step01" ? "step step--01 step--active" : "step step--01" }
  >
    <div
      className={props.activeCard === "variant01" ? "card card--checked" : "card" }
      onClick={()=> props.onCheck("variant01")}
    >
      <div className="card__name">Тип промокампании 1</div>
    </div>
    <div
      className={props.activeCard === "variant02" ? "card card--checked" : "card" }
      onClick={()=> props.onCheck("variant02")}
    >
      <div className="card__name">Тип промокампании 2</div>
    </div>
    <div
      className={props.activeCard === "variant03" ? "card card--checked" : "card" }
      onClick={()=> props.onCheck("variant03")}
    >
      <div className="card__name">Тип промокампании 3</div>
    </div>
    <div
      className={props.activeCard === "variant04" ? "card card--checked" : "card" }
      onClick={()=> props.onCheck("variant04")}
    >
      <div className="card__name">Тип промокампании 4</div>
    </div>
  </div>
}

export default Step01;
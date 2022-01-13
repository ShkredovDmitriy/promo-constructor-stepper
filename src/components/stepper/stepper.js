import React from "react";
import "./stepper.css";
import log from "../../_helpers/log";

function Stepper(props) {

  log("Stepper", props)

  return <div className="stepper">
    {
      props.stepData.elements.map((item, id) => {
        return(
          <div
            className="card" key={id}
            onClick={() => props.cardClickHandler(item) }
          >
            <div className="card__title">{item.title}</div>
            <div className="card__price">Базовая стоимость {item.price} р. / месяц</div>
          </div>
        )
      })
    }


    {/* <div
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
    </div> */}
  </div>
}

export default Stepper;
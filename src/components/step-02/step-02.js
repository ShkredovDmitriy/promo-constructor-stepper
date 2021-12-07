import React from "react";


function Step02(props) {
  return <div
    className={props.currentStep === "step02" ? "step step--02 step--active" : "step step--02" }
  >
    <div className="card--high">
    </div>
    <div className="card--high">
    </div>
  </div>
}

export default Step02;
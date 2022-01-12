import {TStickProps} from "../../_types/types";
import React from 'react';
import "./stick.css"
import log from "../../_helpers/log";

export const Stick = (props: TStickProps) => {

  log("Stick", props.message)

  return(
    <div className="stick__container">{props.message}</div>
  )
}
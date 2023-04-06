import React from "react";

import "./Button.css";

const Button = (props) => {
  let classes = "button ";
  if (props.className != "") {
    classes += props.className;
  }
  return (
    <button type={props.type} className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

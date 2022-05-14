import React from "react";

function Button(props) {
  return <button onClick={props.onClick} className={props.className}>{props.innerText}</button>;
}

export default Button;
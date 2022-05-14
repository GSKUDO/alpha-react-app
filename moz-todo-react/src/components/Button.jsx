import React from "react";

function Button(props) {
  return <button className={props.className}>{props.innerText}</button>;
}

export default Button;
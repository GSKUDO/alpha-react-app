import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} className={props.className}></input>;
}

export default Input;
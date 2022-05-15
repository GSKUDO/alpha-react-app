import React from "react";

function Cards(props) {
  return (
  <cards>
    <div className="cardshow">
      <p className="showDate">{props.date}</p>
      <p className="showLocal">{props.local}</p>
      <br />
      <p className="showDescription">{props.description}</p>
    </div>
  </cards> 
  )
}

export default Cards;
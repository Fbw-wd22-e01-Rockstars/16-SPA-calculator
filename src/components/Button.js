import React from "react";

export default function Button(props) {
  return (
    <div
      onClick={() => props.handleClick(props)}
      style={{
        width: props.value === "0" ? "2fr" : "auto",
        height: "30px",
        border: "2px solid",
      }}
      className={props.className}
    >
      {props.value==="*-1"?"+/-": props.value==="*100/"? "%": props.value}
    </div>
  );
}

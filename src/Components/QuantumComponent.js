import React from "react";

export default function QuantumComponent(props) {
  return (
    <div
      className="qcomponent"
      style={{ left: `${props.xlocation}%`, top: `${props.ylocation}%` }}
    >
      <p>{props.value} </p>
    </div>
  );
}

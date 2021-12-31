import React from "react";

export default function Button(props) {
  return (
    <div>
      <div className={props.className}>{props.value}</div>
    </div>
  );
}

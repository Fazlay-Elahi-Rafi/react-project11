import React from "react";

export default function Props(props) {
  return (
    <>
      <div className="provide__card">
        <div className="">{props.icon}</div>
        <h4 className="provide__card-text">{props.text}</h4>
        <p className="provide__card-para">{props.para}</p>
      </div>
    </>
  );
}

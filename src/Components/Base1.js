import React from "react";
import { Link } from "react-router-dom";
import Back from "../Assets/icons/Back.png";

export default function Base1(props) {
  return (
    <div>
      <div className="vHearder bg-white">
        <div className="con d-flex p-1 justify-content-between">
          <div className="d-flex ">
            <Link to={props.BackLink || "/home"}>
              <img src={Back} alt="Back" className="btn" />
            </Link>
          </div>
          <div className="m-auto">
            {" "}
            <b> {props.name}</b>
          </div>
          <div className="d-flex my-auto mr-2">{props.subName}</div>
        </div>
      </div>
      <div className="main">{props.children}</div>
    </div>
  );
}

import React, { useState } from "react";
import Card from "../UI/Card";
import "./ModalDialog.css";

function ModalDialog(props) {
  const okayBtnHandler = () => {
    props.okayBtn();
  };

  return (
    <div>
      <div className="back-blur" onClick={okayBtnHandler}></div>
      <Card className="dialog-box">
        <p className="invalid-text">Invalid Input</p>
        <p className="error-message">{props.message}</p>
        <button className="error-okay-btn" onClick={okayBtnHandler}>
          Okay
        </button>
      </Card>
    </div>
  );
}

export default ModalDialog;

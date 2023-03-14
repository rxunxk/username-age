import React, { useState } from "react";
import Card from "../UI/Card";
import "./UserForm.css";

let message = "";

function UserForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function onUserChangeHandler(e) {
    setName(e.target.value);
  }

  function onAgeChangeHandler(e) {
    setAge(e.target.value);
  }

  function submitFormHandler(e) {
    e.preventDefault();

    if (name === "") {
      message = "Username cannot be empty!";
      props.onSubmitFn({}, message);
    } else if (parseInt(age) < 1 || age === "") {
      message = "Age cannot be < 1";
      props.onSubmitFn({}, message);
    } else {
      message = "";
      const user = {
        userName: name,
        userAge: age,
        id: Math.random(),
      };
      props.onSubmitFn(user, message);
    }

    setName("");
    setAge("");
  }

  return (
    <div>
      <Card className="userform">
        <form onSubmit={submitFormHandler}>
          <div className="form-control">
            <label>Username</label>
            <input type="text" value={name} onChange={onUserChangeHandler} />
          </div>
          <div className="form-control">
            <label>Age (Years)</label>
            <input type="number" value={age} onChange={onAgeChangeHandler} />
          </div>
          <button className="addUserBtn">Add User</button>
        </form>
      </Card>
    </div>
  );
}

export default UserForm;

import "./App.css";
import React, { useState } from "react";
import UserForm from "./Components/Form/UserForm";
import UserList from "./Components/List/UserList";
import ModalDialog from "./Components/Form/ModalDialog";

let message = "";
let modalContent = "";

function App() {
  const [userDetails, setUser] = useState([]);
  const [isValid, setValid] = useState(true);

  function submitHandler(user, m) {
    if (m === "") {
      setUser((prevUserDetails) => {
        return [...prevUserDetails, user];
      });
    } else {
      message = m;
      setValid(false);
    }
  }

  function okayBtnHandlerInApp() {
    setValid(true);
  }

  if (!isValid) {
    modalContent = (
      <ModalDialog
        message={message}
        okayBtn={okayBtnHandlerInApp}
      ></ModalDialog>
    );
  } else {
    modalContent = "";
  }

  return (
    <div className="App">
      <UserForm onSubmitFn={submitHandler}></UserForm>
      <UserList user={userDetails}></UserList>
      {modalContent}
    </div>
  );
}

export default App;

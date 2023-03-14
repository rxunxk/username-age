import React from "react";
import "./UserList.css";
import Card from "../UI/Card";

function UserList(props) {
  let listContent = (
    <p className="list-item">Add a new User by clicking the Add Button!</p>
  );

  if (props.user.length > 0) {
    listContent = props.user.map((user) => (
      <p
        className="list-item"
        key={user.id}
      >{`${user.userName} (${user.userAge} Years Old)`}</p>
    ));
  }

  let card =
    props.user.length === 0 ? (
      ""
    ) : (
      <Card className="userlist">{listContent}</Card>
    );

  return (
    <div>
      {/* <Card className="userlist">{listContent}</Card> */}
      {card}
    </div>
  );
}

export default UserList;

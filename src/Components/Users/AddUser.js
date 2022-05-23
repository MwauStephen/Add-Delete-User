import React from "react";
import Card from "../UI/Card";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add user</button>
        <button type="button">Delete user</button>
      </form>
    </Card>
  );
};

export default AddUser;

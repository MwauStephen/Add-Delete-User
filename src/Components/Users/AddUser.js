import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add user</button>
      <button type="button">Delete user</button>
    </form>
  );
};

export default AddUser;

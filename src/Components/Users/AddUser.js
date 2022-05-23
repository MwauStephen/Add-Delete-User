import React from "react";

const AddUser = () => {
  return (
    <form>
      <label htmlFor="username">UserName</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age(Years)</label>
      <input id="age" type="number" />
      <button>Add user</button>
      <button>Delete user</button>
    </form>
  );
};

export default AddUser;

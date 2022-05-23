import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  //   form submission handler
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName, enteredUserAge);
  };

  //   username handler
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  //   age handler
  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={userAgeChangeHandler} />
        <Button type="submit">Add user</Button>
        <Button type="button">Delete user</Button>
      </form>
    </Card>
  );
};

export default AddUser;

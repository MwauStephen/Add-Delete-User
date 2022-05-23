import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  //   form submission handler
  const addUserHandler = (event) => {
    event.preventDefault();

    // adding form validation
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 0) {
      return;
    }
    // clearing inputs
    setEnteredUserName("");
    setEnteredUserAge("");

    console.log(enteredUserAge, enteredUserName);
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
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          onChange={userAgeChangeHandler}
          value={enteredUserAge}
        />
        <Button type="submit">Add user</Button>
        <Button type="button">Delete user</Button>
      </form>
    </Card>
  );
};

export default AddUser;

import React, { useState, Fragment } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  //   state renders modal conditionally
  const [error, setError] = useState();

  //   form submission handler
  const addUserHandler = (event) => {
    event.preventDefault();

    // adding form validation
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty value)",
      });
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid age input",
        message: "Please enter a valid age(age >0)",
      });
    }
    // lifiting state up

    props.onAddUser(enteredUserName, enteredUserAge);

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
    <Fragment>
      <ErrorModal title="An error ocurred" message="Somnething went wrong" />
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
    </Fragment>
  );
};

export default AddUser;

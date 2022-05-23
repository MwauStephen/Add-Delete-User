import React, { Fragment } from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.css";

const ErrorModal = (props) => {
  <Fragment>
    <div />
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  </Fragment>;
};

export default ErrorModal;

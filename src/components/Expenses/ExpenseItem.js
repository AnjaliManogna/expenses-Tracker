import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );
    if (confirmDelete) {
      const expenseItem = document.getElementById(props.expenseId);
      expenseItem.remove();
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;

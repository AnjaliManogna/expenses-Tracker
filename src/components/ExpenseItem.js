import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { category, amount, locationOfExpenditure } = props;

  return (
    <div className="expense-item">
      <div className="expense-item-row">
        <div className="expense-item-category">{category}</div>
        <div className="expense-item-amount">{amount}</div>
      </div>
      <div className="expense-item-row">
        <div className="expense-item-location">{locationOfExpenditure}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

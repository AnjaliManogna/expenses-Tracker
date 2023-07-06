function ExpenseItem() {
  return (
    <div className="expense-item">
      {/* <div>Food</div>
      <h2>car insurance</h2>
      <div className="expense-item_price">$294.67</div> */}

      <thead>
        <tr>
          <td>Food</td>
          <td>Rs.10</td>
        </tr>
        <tr>
          <td>petrol</td>
          <td>Rs.100</td>
        </tr>
        <tr>
          <td>Movies</td>
          <td> Rs 200</td>
        </tr>
      </thead>
    </div>
  );
}
export default ExpenseItem;

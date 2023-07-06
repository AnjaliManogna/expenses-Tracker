import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      category: "Food",
      amount: "Rs.10",
      locationOfExpenditure: "Home",
    },
    // Add more expense objects here as needed
    // ...
    {
      category: "Petrol",
      amount: "Rs.100",
      locationOfExpenditure: "Gas station",
    },
    {
      category: "Movies",
      amount: "Rs.200",
      locationOfExpenditure: "Theatre",
    },
  ];

  const expenseItems = [];

  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItem
        key={i}
        category={expense.category}
        amount={expense.amount}
        locationOfExpenditure={expense.locationOfExpenditure}
      />
    );
  }

  return (
    <div>
      <h2>
        <center>EXPENSE ITEMS</center>{" "}
      </h2>{" "}
      {expenseItems}
    </div>
  );
}

export default App;

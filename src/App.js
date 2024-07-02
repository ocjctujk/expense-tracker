import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [expenses, setexpenses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/expenses").then((data) => {
      console.log(data);
      setexpenses(data.data);
    });
  }, []);

  return (
    <div className="App">
      <Container>
        <Typography variant="h3">Expenses</Typography>
        <ul>
          {expenses.map((expense) => {
            return <li key={expense.id}>{expense.title}    &nbsp;&nbsp;&nbsp; $ {expense.cost}</li>;
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;

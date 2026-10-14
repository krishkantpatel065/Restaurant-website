import { useState } from "react";
// import "./App.css";
import Navbar from "./components/navbar.jsx";
import Main from "./components/Main.jsx";
import TodoList from "./components/todoList.jsx";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <Navbar />
      <Main/> */}
      <TodoList />
    </div>
  );
}
export default App;

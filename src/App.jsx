import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Search from "./components/Search/Search";
import Book from "./components/Book/Book";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
      <Nav></Nav>
      <Search />
      <Login />
    </>
  );
}

export default App;

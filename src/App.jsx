import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Search from "./components/Search/Search";
import Book from "./components/Book/Book";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Search />
      <Book />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Book from "./components/Book/Book";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Book />
    </>
  );
}

export default App;

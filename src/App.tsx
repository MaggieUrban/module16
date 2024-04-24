import React, { useState } from "react";
import { Form } from "./components/Form";
import { Form2 } from "./components/Form2";
import { Load } from "./components/Load";

function App() {
  const [currentNum, setCurrentNum] = useState(1);
  const handleMouseEnter = (num: number) => {
    setCurrentNum(num);
  };

  return (
    <div className="app">
      <nav>
        <span onMouseDown={() => handleMouseEnter(1)}>React Form</span>
        <span onMouseDown={() => handleMouseEnter(2)}>React hook form</span>
        <span onMouseDown={() => handleMouseEnter(3)}>Rick and Morty</span>
      </nav>
      {currentNum === 1 && <Form />}
      {currentNum === 2 && <Form2 />}
      {currentNum === 3 && <Load />}
    </div>
  );
}

export default App;

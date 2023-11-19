import React, { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Ошибка");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      <div className="buttons">
        <Button value="1" onClick={() => handleButtonClick("1")} />
        <Button value="2" onClick={() => handleButtonClick("2")} />
        <Button value="3" onClick={() => handleButtonClick("3")} />
        <Button value="4" onClick={() => handleButtonClick("4")} />
        <Button value="5" onClick={() => handleButtonClick("5")} />
        <Button value="6" onClick={() => handleButtonClick("6")} />
        <Button value="7" onClick={() => handleButtonClick("7")} />
        <Button value="8" onClick={() => handleButtonClick("8")} />
        <Button value="9" onClick={() => handleButtonClick("9")} />
        <Button value="0" onClick={() => handleButtonClick("0")} />
        <Button value="+" onClick={() => handleButtonClick("+")} />
        <Button value="*" onClick={() => handleButtonClick("*")} />
        <Button value="/" onClick={() => handleButtonClick("/")} />
        <Button value="-" onClick={() => handleButtonClick("-")} />
        <Button value="C" onClick={handleClear} className="clearButton" />
        <Button
          value="="
          onClick={handleCalculate}
          className="calculateButton"
        />
      </div>
    </div>
  );
}

export default App;

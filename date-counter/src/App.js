import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [dateCounter, setDateCounter] = useState(0);
  const [step, setStep] = useState(1);

  function nextDate() {
    setDateCounter((s) => s + step);
  }

  function prevDate() {
    setDateCounter((s) => s - step);
  }

  const date = new Date();
  date.setDate(date.getDate() + dateCounter);

  return (
    <>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Steps: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={prevDate}>-</button>
        <span>Date</span>
        <button onClick={nextDate}>+</button>
      </div>
      <div>
        <span>
          {dateCounter === 0
            ? "Today is "
            : dateCounter > 0
            ? `${dateCounter} days from today is `
            : `${Math.abs(dateCounter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}

export default App;

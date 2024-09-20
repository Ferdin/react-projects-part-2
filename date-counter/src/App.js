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

  function handleReset() {
    setDateCounter(0);
    setStep(1);
  }

  const date = new Date();
  date.setDate(date.getDate() + dateCounter);

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Steps: {step}</span>
      </div>
      <div>
        <button onClick={prevDate}>-</button>
        <input
          type="text"
          value={dateCounter}
          onChange={(e) => setDateCounter(Number(e.target.value))}
        />
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
        {dateCounter !== 0 || step !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;

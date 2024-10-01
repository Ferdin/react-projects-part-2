import { useState } from "react";

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("0");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillComponent bill={bill} onSetBill={setBill} />
      <ServiceRating percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </ServiceRating>
      <ServiceRating percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like this service?
      </ServiceRating>
      {bill > 0 && (
        <>
          <DisplayTip bill={bill} tip={tip} />
          <ResetButton onHandleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillComponent({ bill, onSetBill }) {
  return (
    <div>
      <label>how much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function ServiceRating({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was amazing (20%)</option>
      </select>
    </div>
  );
}

function DisplayTip({ bill, tip }) {
  return (
    <div>
      <h2>
        You pay {bill + tip} (${bill} + ${tip} Tip)
      </h2>
    </div>
  );
}

function ResetButton({ onHandleReset }) {
  return (
    <div>
      <button onClick={onHandleReset}>Reset</button>
    </div>
  );
}
export default App;

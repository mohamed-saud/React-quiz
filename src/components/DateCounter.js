import { useReducer } from "react";

const initailState = { step: 1, count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "rest":
      return initailState;
    default:
      throw new Error("invalid action");
  }
}

function DateCounter() {
  const [state, disPatch] = useReducer(reducer, initailState);

  const { step, count } = state;

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    disPatch({ type: "dec" });
  };

  const inc = function () {
    disPatch({ type: "inc" });
  };

  const defineCount = function (e) {
    disPatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    disPatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    disPatch({ type: "rest" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

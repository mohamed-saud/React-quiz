import { useEffect } from "react";

function Timer({ dispatch, secendRemining }) {
  const mins = Math.floor(secendRemining / 60);
  const secend = secendRemining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}: {secend < 10 && "0"}
      {secend}
    </div>
  );
}

export default Timer;

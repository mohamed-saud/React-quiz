function FinishScreen({ points, maxPosobilePoints, heightScore, dispatch }) {
  const percetege = (points / maxPosobilePoints) * 100;

  let emoji;
  if (percetege === 100) emoji = "🥇";
  if (percetege >= 80 && percetege < 100) emoji = "😌";
  if (percetege >= 50 && percetege < 80) emoji = "🙃";
  if (percetege > 0 && percetege < 50) emoji = "🤔";
  if (percetege === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> Your scored <strong>{points}</strong> out op{" "}
        {maxPosobilePoints} ({Math.ceil(percetege)}%)
      </p>
      <p className="highscore">(Heighscore : {heightScore} points)</p>

      <button
        className="btn bt-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Rest Quz
      </button>
    </>
  );
}

export default FinishScreen;

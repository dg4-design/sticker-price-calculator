const App = () => {
  const [numStickers, setNumStickers] = React.useState(0);
  const [result, setResult] = React.useState({
    remainder: 0,
    singlePrice: 0,
    setsOfFour: 0,
    setsPrice: 0,
    totalPrice: 0,
    suggestion: "",
  });

  const calculateResult = (num) => {
    const setsOfFour = Math.floor(num / 4);
    const remainder = num % 4;
    const totalPrice = setsOfFour * 400 + remainder * 200;

    let suggestionStr = "";
    if (remainder === 2) {
      suggestionStr = `同じ ¥${totalPrice}で2枚追加購入できます。`;
    } else if (remainder === 3) {
      suggestionStr = `¥${totalPrice - 200}で1枚追加購入できます。`;
    }

    return {
      remainder,
      singlePrice: remainder * 200,
      setsOfFour,
      setsPrice: setsOfFour * 400,
      totalPrice,
      suggestion: suggestionStr,
    };
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setNumStickers(value);
    setResult(calculateResult(value));
  };

  return (
    <div>
      <input type="number" min="1" value={numStickers} onChange={handleInputChange} />

      <p>
        1枚 (¥200) * {result.remainder} = ¥{result.singlePrice}
      </p>
      <p>
        4枚 (¥400) * {result.setsOfFour} = ¥{result.setsPrice}
      </p>
      <p>合計: ¥{result.totalPrice}</p>

      <p>{result.suggestion}</p>
    </div>
  );
};

const target = document.getElementById("app");
const root = ReactDOM.createRoot(target);
root.render(<App />);

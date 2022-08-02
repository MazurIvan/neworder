import { useState } from "react";
import "./style.css";

function App() {

  const [count, updateCount] = useState(0);

  const handleClick = () => {
    updateCount(count + 1);
  }

  const handleClickMin = () => {
    updateCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Борщ Український</h1>
      <p>Кількість замовленних порцій: {count}.</p>
      <button onClick={handleClick} className="Add">Додати</button>
      <button onClick={handleClickMin} className="Del">Прибрати</button>
      <br></br>
      <br></br>
      <button className="Buy">В кошик!</button>
    </div>
  );
}

export default App;

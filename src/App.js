import { useState } from "react";
import "./style.css";

function App() {

  const [count, updateCount] = useState(0);
  const [basket, updateBasket] = useState(0)

  const addBasket = () => {
    updateBasket(basket + 1);
  }

  const handleClick = () => {
    updateCount(count + 1);
  }

  const handleClickMin = () => {
    updateCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Борщ</h1>
      <h2>100грн</h2>
      <p>Кількість замовленних порцій: {count}.</p>
      <button onClick={handleClick} className="Add">Додати</button>
      <button onClick={handleClickMin} className="Del">Прибрати</button>
      <br></br>
      <br></br>
      <button onClick={addBasket} className="Buy">У кошик!</button>
      <br></br>
      <p className="Basket">У кошику {basket} замовлень.</p>
    </div>
  );
}

export default App;

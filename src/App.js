import { useState } from "react";
import "./style.css";
import borscht1 from "./borscht1.jpg"
import varenyki from "./varenyki.jpg"

function App() {

  const borscht = () => {
    document.getElementById("change1").innerHTML = "Борщ"
    document.getElementById("change2").innerHTML = "100 грн"
  }

  const varenyku = () => {
    document.getElementById("change1").innerHTML = "Вареники"
    document.getElementById("change2").innerHTML = "100 грн"
  }

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
    <div className="container">
      <div className="header2">
        <h1>МЕНЮ</h1>
      </div>
      <div className="item">
        <div className="App">
          <img src={borscht1} className="photo" alt="borscht"></img>
          <h1 className="main">Борщ</h1>
          <ul>
            <li>На свинині</li>
            <li>Пампушки з салом</li>
            <li>Сметана</li>
            <li>Свіжа зелень</li>
            <li>Порція 400г</li>
            <li>Ціна 100грн</li>
          </ul>
          <a href="#sec2" onClick={borscht} className="btn">Замовити!</a>
        </div>
      </div>
    <div className="item">
        <div className="App">
          <img src={varenyki} className="photo" alt="varenyki"></img>
          <h1 className="main">Вареники з картоплею</h1>
          <ul>
            <li>Гриби</li>
            <li>Кріп</li>
            <li>Сметана</li>
            <li>Вершкове масло</li>
            <li>Порція 400г</li>
            <li>Ціна 100грн</li>
          </ul>
          <a href="#sec2" onClick={varenyku} className="btn">Замовити!</a>
        </div>
      </div>
      <section id="sec2"></section>
      <div className="header2">
        <h1>ЗАМОВЛЕННЯ</h1>
      </div>
    <div className="item">
    <div className="App">
      <h1 id="change1">Оберіть страву у меню</h1>
      <h2 id="change2">0 грн</h2>
      <p>Кількість замовленних порцій: {count}.</p>
      <button onClick={handleClick} className="Add">Додати</button>
      <button onClick={handleClickMin} className="Del">Прибрати</button>
      <br></br>
      <br></br>
      <div id="modal">
        <div id="window">
          Додано у кошик!<br></br>
          <a href="#main1" className="close">Добре</a>
        </div>
      </div>
      <a href="#modal" className="btn" onClick={addBasket}>У кошик!</a>
      <p className="Basket">У кошику {basket} замовлень.</p>
    </div>
    </div>
    </div>
  );
}

export default App;

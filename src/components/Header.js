import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сума: ₴{new Intl.NumberFormat().format(summa)}</p>
    <button className='buy-btn'>Замовити</button>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Замовленнь немає</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div className='fixed-head'>
            <span className='logo'>Умовна доставка</span>
            <ul className='nav'>
                <li><a href="#sec1">Про нас</a></li>
                <li><a href="#sec2">Контакти</a></li>
                <li><a href="#sec3">Відгуки</a></li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}

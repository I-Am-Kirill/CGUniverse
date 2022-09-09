import React from 'react';
import Purchased from './Purchased/Purchased';
import './BasketShop.css';

export default function BasketShop() {
  return (
    <div className="basket-container">
      <div className="basket-header">
        <h1 className="basket-header-text">Корзина</h1>
        <a className="basket-header-dellAll" href="/">очистить список</a>
      </div>
      <div className="basket-content">
        <Purchased />
        <Purchased />
        <Purchased />
        <Purchased />
        <Purchased />
        <Purchased />
      </div>
      <div className="basket-button1">
        <a className="basket-button" href="/">
          <span className="basket-button-text">Оплатить</span>
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import Purchased from './Purchased/Purchased';

export default function BasketShop() {
  return (
    <div className="basket-container">
      <div className="basket-content">
        <h1 className="basket-content-header">Корзина</h1>
        <Purchased />
        <Purchased />
        <Purchased />
      </div>
    </div>
  );
}

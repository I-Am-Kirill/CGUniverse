/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="AboutUs-body">
      <div className="AboutUs-container">
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src="https://static.sketchfab.com/static/builds/web/dist/static/assets/images/pages/home/b23570d4e6681f42b143b822fccbb1a6-v2.svg" />
          <div className="AboutUs-container-title">
            <h1 className="AboutUs-card-title">Присоединяйтесь к нам и продемонстрируйте свою работу</h1>
          </div>
          <button className="btn AboutUs-card-btn">ПРИСОЕДИНИТЬСЯ</button>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src="/go-to-shop.png" />
          <div className="AboutUs-container-title">
            <h1 className="AboutUs-card-title">Покупайте и продавайте 3D-модели в магазине</h1>
          </div>
          <button className=" btn AboutUs-card-btn">ПЕРЕЙТИ В МАГАЗИН</button>
        </div>
        <div className="AboutUs-card">
          <img className="AboutUs-card-img" src="/add-people.jpeg" />
          <div className="AboutUs-container-title">
            <h1 className="AboutUs-card-title">Объединяйтесь и создавайте 3D модели вместе</h1>
          </div>
          <button className=" btn AboutUs-card-btn">НАЙТИ КОМАНДУ </button>
        </div>
      </div>
    </div>
  );
}

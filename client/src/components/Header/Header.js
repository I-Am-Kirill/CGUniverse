import React, { useEffect, useState } from 'react';
import './Header.css';

export default function Header({ setModalActive }) {
  const [navSize, setnavSize] = useState('10rem');
  const [navColor, setnavColor] = useState('transparent');
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#252734') : setnavColor('transparent');
    window.scrollY > 10 ? setnavSize('5rem') : setnavSize('5rem');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <header
      className="header"
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: 'all 1s',
      }}
    >
      <div className="header-container-first">
        <a className="header-logo-and-name" href="#">
          <img className="header-logo" src="/" alt="logo" />
          CGU30
        </a>
      </div>
      <div className="header-container-second">
        <ul className="header-navigation">
          <div className="header-navigation-item-dropdown1">
            <a className="header-navigation-link-dropdown-toggle1" href="#">
              Использование
            </a>
            <div className="header-dropdown-menu1">
              <a className="header-dropdown-item1" href="#">11111 </a>
              <a className="header-dropdown-item1" href="#">22222 </a>
              <a className="header-dropdown-item1" href="#">33333 </a>
              <a className="header-dropdown-item1" href="#">55555 </a>
              <a className="header-dropdown-item1" href="#">66666 </a>
              <a className="header-dropdown-item1" href="#">77777 </a>
              <a className="header-dropdown-item1" href="#">88888 </a>
              <a className="header-dropdown-item1" href="#">99999 </a>
              <a className="header-dropdown-item1" href="#">11111 </a>
              <a className="header-dropdown-item1" href="#">44444 </a>

            </div>
          </div>
          <div className="header-navigation-item-dropdown1">
            <a className="header-navigation-link-dropdown-toggle1" href="#">
              К покупкам
            </a>
            <div className="header-dropdown-menu1">
              <a className="header-dropdown-item1" href="#">11111 </a>
              <a className="header-dropdown-item1" href="#">22222 </a>
              <a className="header-dropdown-item1" href="#">33333 </a>
              <a className="header-dropdown-item1" href="#">44444 </a>
            </div>
          </div>
          <div className="header-navigation-item-dropdown1">
            <a className="header-navigation-link-dropdown-toggle1" href="#">
              Для бизнеса
            </a>
            <div className="header-dropdown-menu1">
              <a className="header-dropdown-item1" href="#">11111 </a>
              <a className="header-dropdown-item1" href="#">22222 </a>
              <a className="header-dropdown-item1" href="#">33333 </a>
              <a className="header-dropdown-item1" href="#">44444 </a>
            </div>
          </div>
        </ul>
      </div>
      <div className="header-container-third">
        <a className="header-input-link" href="#">
          <input className="header-form-control" type="search" placeholder="Search" aria-label="Search" />
          {/* <button className="header-form-btn" type="submit">Search</button> */}
        </a>
      </div>
      <div className="header-container-fourth" onClick={() => setModalActive(true)}>
        <a className="header-right-btn" href="#">
          <span className="header-right-btn-text">
            <img
              className="header-right-button-cart-icon"
              src="shopping-cart-svgrepo-com.svg"
              alt="Cart"
              width="20px"
              height="20"
              type="button"
            />
          </span>
        </a>
        <a className="header-btn header-right-btn1" href="#">
          <span className="header-right-btn-text"> Войти</span>
        </a>
        <a className="header-btn header-right-btn2" href="#">
          <span className="header-right-btn-text">Присоединиться </span>
        </a>
        <a className="header-btn header-right-btn3" href="#">
          <span className="header-right-btn-text"> Загрузить</span>
        </a>
      </div>
    </header>
  );
}

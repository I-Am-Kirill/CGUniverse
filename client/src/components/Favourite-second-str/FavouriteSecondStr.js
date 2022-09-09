import React, { useState } from 'react';
import '../Favourite/Favourite.css';
import './FavouriteSecondStr.css';

export default function FavouriteSecondStr() {
  const [isPauzet, setIsPauzet] = useState(false);
  return (
    <div className="Favourite-second-container" onMouseEnter={() => (setIsPauzet(true))} onMouseLeave={() => (setIsPauzet(false))}>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
      <div className={`Favourite-second-card ${isPauzet && 'paused'}`}>
        <img className="Favourite-card-img" src="/car-lada.png" />
        <h1>Пушка</h1>
      </div>
    </div>
  );
}

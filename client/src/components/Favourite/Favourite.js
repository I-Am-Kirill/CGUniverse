/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Favourite.css';

export default function Favourite() {
  const [isPauzet, setIsPauzet] = useState(false);
  return (
    <div className="favourite-back">
      <h1 className="Favourite-title">Наши рекомендации:</h1>
      <div className="Favourite-container" onMouseEnter={() => (setIsPauzet(true))} onMouseLeave={() => (setIsPauzet(false))}>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
        <div className={`Favourite-card ${isPauzet && 'paused'}`}>
          <img className="Favourite-card-img" src="/car-lada.png" />
          <h1>Жига</h1>
        </div>
      </div>
    </div>
  );
}

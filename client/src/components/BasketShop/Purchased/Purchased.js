import React from 'react';
import './Purchased.css';

export default function Purchased() {
  return (
    <div className="pur-container">

      <div className="pur-content">
        <div className="pur-icon">
          <img className="pur-icon-cross" src="/icons/cross.png" alt="cross" />
          <img className="pur-icon-like" src="/icons/star.png" alt="like" />
        </div>
        <div className="pur-info">
          <img
            className="pur-info-img"
            src="https://avatars.mds.yandex.net/i?id=58f6e7bf62a530b37a0fb22859663b31-5238957-images-thumbs&n=13"
            alt="..."
          />
          <div className="pur-info-text">
            <p className="pur-info-text-model">model name</p>
            <p className="pur-info-text-author">author name</p>
          </div>
        </div>
        <div className="pur-price">
          <p className="pur-price-text">3343</p>
        </div>
        <div />
      </div>
    </div>
  );
}

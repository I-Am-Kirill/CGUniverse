import React from 'react';
import './OneCard.css';


export default function Page() {
  return (
    <div className="card">
      <img
        className="model-img"
        src="https://www.rabstol.net/uploads/gallery/main/640/rabstol_net_cowboy_bebop_01.jpg"
        alt="img"
      />
      <div className="card-footer">
        <div className="card-footer-left">
          <img
            className="card-footer-avatar"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            alt="img"
          />
          <p className="model-name-title">knight witch</p>
        </div>
        <div className="card-footer-rigth">
          <div className="icon">
            <img className="icon-img" src="/icons/2102115.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div>
          <div className="icon">
            <img className="icon-img" src="/icons/chat.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div>
          <div className="icon">
            <img className="icon-img" src="/icons/star.png" alt="..." />
            <p className="card-footer-text">1000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

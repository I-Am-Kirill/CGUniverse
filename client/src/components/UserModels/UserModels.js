import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function UserModels({ el }) {
  const [likesModel, setLikesModel] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/model/like/${el.id}}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLikesModel(data);
      });
  }, []);

  console.log(likesModel, 'likesModel=====');
  return (
    <div className="card">
      <img
        className="model-img"
        src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
        alt={el.name}
      />
      <div className="card-footer">
        <div className="card-footer-left">
          {/* <img
      className="card-footer-avatar"
      src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
      alt="img"
    /> */}
          <p className="model-name-title">{el.name}</p>
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

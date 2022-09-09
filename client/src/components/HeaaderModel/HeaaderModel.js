import React from 'react';
import Scene from '../Scene/Scene';
import './HeaaderModel.css';

export default function HeaaderModel() {
  return (
    <div className="heaader-model-body">
      <div className="heaader-model-container-first">
        <div className="heaader-model-box-title">
          <h1 className="heaader-model-title">
            Платформа для покупки
            <br />
            {' '}
            и продажи 3D и AR в
            {' '}
            <br />
            Интернете
          </h1>
        </div>
        <div className="heaader-model-box-text">
          <p className="heaader-model-text">
            Управляйте своими 3D-ресурсами. Распространяйте опыт 3D и AR. Сотрудничайте с другими. Продемонстрируйте свою работу.
            <br />
            {' '}
            Покупайте и продавайте 3D модели.
          </p>
        </div>
        <div className="heaader-model-btn-container">
          <button className="btn header-model-btn-reg">ЗАРЕГИСТРИРОВАТЬСЯ</button>
          <button className="btn header-model-btn-models-list">ПОСМОТРЕТЬ МОДЕЛИ</button>
        </div>
      </div>
      <div className="heaader-model-container-second">
        <Scene className="heaader-model-canvas" width="800" height="650" />
        {/* <canvas className='heaader-model-canvas' width='800' height='650'></canvas> */}
      </div>
    </div>
  );
}

// import { useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
import { Children, useState } from 'react';
import Scene from './components/Scene/Scene';
import './App.css';
import BasketShop from './components/BasketShop/BasketShop';
import Modal from './components/Modal/Modal';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';



function App() {
  const [modalActive, setModalActive] = useState(false);
  // useEffect(() => {
  //   fetch('http://localhost:3006/test')
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // });
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Scene />} />
      </Routes> */}
      {/*
      <button className="open-btn" onClick={() => setModalActive(true)} type="button">open</button>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <BasketShop />
      </Modal> */}

      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page" element={<Page />} />
      </Routes>

    </div>
  );
}

export default App;


import { useState } from 'react';
import Scene from './components/Scene/Scene';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import BasketShop from './components/BasketShop/BasketShop';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';



function App() {

  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Scene />} />
      </Routes> */}
      <Scene />

      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <BasketShop />
      </Modal>

      <Header setModalActive={setModalActive} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page" element={<Page />} />
      </Routes>

    </div>
  );
}

export default App;

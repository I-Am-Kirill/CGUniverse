// import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Scene from './components/Scene/Scene';
import './App.css';
import BasketShop from './components/BasketShop/BasketShop';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Profile from './components/Profile/Profile';



function App() {
  const [modalActive, setModalActive] = useState(true);
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Scene />} />
      </Routes> */}
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
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;

// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Scene from './components/Scene/Scene';
import './App.css';
import BasketShop from './components/BasketShop/BasketShop';
import Modal from './components/Modal/Modal';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Profile from './components/Profile/Profile';
import { setAuth } from './redux/actions/authActions';
import Registration from './components/Registration/Registration';



function App() {
  const [modalActive, setModalActive] = useState(true);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3002/auth/', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAuth(res));
      });
  }, []);
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Scene />} />
      </Routes> */}
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        {/* <BasketShop /> */}
        <Registration />
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

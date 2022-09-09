import { Children, useState } from 'react';
import './App.css';
import BasketShop from './components/BasketShop/BasketShop';
import Modal from './components/Modal/Modal';


function App() {
  const [modalActive, setModalActive] = useState(false);
  // useEffect(() => {
  //   fetch('http://localhost:3006/test')
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // });
  return (
    <div className="App">
      <button className="open-btn" onClick={() => setModalActive(true)} type="button">open</button>
      <Modal
        active={modalActive}
        setActive={setModalActive}
      >
        <BasketShop />
      </Modal>
    </div>
  );
}

export default App;

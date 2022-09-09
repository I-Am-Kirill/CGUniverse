import { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';


function App() {
  useEffect(() => {
    fetch('http://localhost:3006/test')
      .then((res) => res.json())
      .then((res) => console.log(res));
  });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;

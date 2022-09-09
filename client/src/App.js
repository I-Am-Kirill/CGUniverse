// import { useEffect } from 'react';
// import { Route, Routes } from 'react-router-dom';
import Scene from './components/Scene/Scene';
import './App.css';

function App() {
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
      <Scene />
    </div>
  );
}

export default App;

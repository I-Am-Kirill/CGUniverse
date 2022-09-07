import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('http://localhost:3006/test')
      .then((res) => res.json())
      .then((res) => console.log(res));
  });
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import './App.css';

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

      <Main></Main>

      <Page />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

const fetch = require('node-fetch');
// import './App.css';

export const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/1');

function App({ data }) {
  const [isOpen, setOpen] = useState(false);
  const [res, setData] = useState(data || {});

  useEffect(() => {
      fetchData()
          .then(res => res.json())
          .then(data => {
              setData(data);
          })
  }, []);

  return (
    <div className="App">
      <Home data={res} />

      <span>{isOpen ? 'open' : 'close'}</span>
      <button onClick={setOpen}>Click</button>
    </div>
  );
}

export default App;

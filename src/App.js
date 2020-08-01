import React from 'react';
import Saludo from './components/Saludo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Saludo usuario="Emiliano" mensaje="Un gran saludo"></Saludo>
    </div>
  );
}

export default App;

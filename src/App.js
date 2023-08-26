import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import React from 'react';

function App() {
  const name = 'Lívea'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'http://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Bem vindo, {newName}</h1>
      <p>Meu primeiro app</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
      
    </div>
  );
}

export default App;

import './App.css';
// import Frase from './components/Frase';
// import HelloWorld from './components/HelloWorld';
import React from 'react';
// import Evento from './components/Eventos';
// import Form from './components/Form';
import Condicional from './components/Condicional.js';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';

function App() {
  // const name = 'Lívea'
  // const newName = name.toUpperCase()

  // function sum(a, b){
  //   return a + b
  // }

  // const url = 'http://via.placeholder.com/150'

  return (
    <div className='App'>
      <h1>Renderização condicional</h1>
      <Condicional />
      {/* <h1>Testando eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form/> */}
    </div>
  //   <div className="App">
  //     <h1>Bem vindo, {newName}</h1>
  //     <Frase/>
  //     <p>Meu primeiro app</p>
  //     <p>Soma: {sum(1, 2)}</p>
  //     <img src={url} alt="Minha Imagem"/>
  //     {/* <HelloWorld/> */}
  //     <SayMyName nome="Matheus"/>
  //     <SayMyName nome={name}/>
  //     <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
  //     <List/>
  //   </div>
  );
}

export default App;

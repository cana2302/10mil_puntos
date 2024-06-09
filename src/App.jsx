import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import FormInicial from './components/FormInicial';
import FormApodos from './components/FormApodos';

function App() {

  const [inputInicial, setInputInicial] = useState('')
  const [cantidadJugadores, setCantidadJugadores] = useState('');
  const [error, setError] = useState('');

  const [inputApodos, setInputApodos] = useState([]);
  const [apodoOk, setApodoOk] = useState(false);

  if (cantidadJugadores === '') {
    return(
      <main className='board'>
        <h1>Puntos 10mil</h1>
        <FormInicial inputInicial={inputInicial} setInputInicial={setInputInicial} cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} error={error} setError={setError} />
      </main>
    );
  } if (cantidadJugadores != '' && apodoOk===false) {

    return (
      <main className='board'>
        <h1>Puntos 10mil</h1>
        <FormApodos numberOfInputs={cantidadJugadores} inputApodos={inputApodos} setInputApodos={setInputApodos} setApodoOk={setApodoOk} />
      </main>
    );
  } if (apodoOk) {

    return (
      <main className='board'>
      <h1>Puntos 10mil</h1>
      <p>Tablero</p>
    </main>
    );
  };
};

export default App
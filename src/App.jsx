import { useState, useEffect } from 'react';
import FormInicial from './components/FormInicial';
import FormApodos from './components/FormApodos';
import FichaPersonal from './components/FichaPersonal';
import FormPuntos from './components/FormPuntos';
import Ganador from './components/Ganador';

function App() {

  const [winner, setWinner] = useState(false);
  const [inputInicial, setInputInicial] = useState('')
  // Número de jugadores:
  const [cantidadJugadores, setCantidadJugadores] = useState('');
  const [error, setError] = useState('');
  const [inputApodos, setInputApodos] = useState([]);
  const [apodoOk, setApodoOk] = useState(false);
  /* Array de objetos[{..},{..},{..}]. Objeto[0]: {apodo:xxx, puntos:999, missing:10000} */
  const [jugadores, setJugadores] = useState([]);
  const [turno, setTurno] = useState(0);
  const [fin, setFin] = useState(false);
  const [apodoWinner, setApodoWinner] = useState('');

  const resetGame = () => {
    const confirmacion = window.confirm('¿Estás seguro de resetear?');
    if (confirmacion) {
      setInputInicial('');
      setCantidadJugadores('');
      setError('');
      setInputApodos([]);
      setApodoOk(false);
      setJugadores([]);
      setTurno(0);
      setFin(false);
      setApodoWinner('');
    } 
  }

  const handlePuntosChange = (index, nuevosPuntos) => {
    const nuevosJugadores = [...jugadores];
    nuevosJugadores[index].puntos += parseInt(nuevosPuntos, 10);
    nuevosJugadores[index].missing -= parseInt(nuevosPuntos, 10);
    setJugadores(nuevosJugadores);

    if (jugadores[turno].puntos >= 10000) {
      setWinner(true);
      setApodoWinner(jugadores[turno].apodo);
    }
    /*
    if (nuevosJugadores[index].puntos >= 10000) {
      alert(`Ganador ${nuevosJugadores[index].apodo}`);
    }*/
  };

  const siguienteTurno = () => {
    setTurno((prevTurno) => (prevTurno + 1) % cantidadJugadores);
  };

  if (cantidadJugadores === '') {
    return(
      <main className='board'>
        <h1>10mil</h1>
        <FormInicial inputInicial={inputInicial} setInputInicial={setInputInicial} cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} error={error} setError={setError} />
      </main>
    );

  } if (cantidadJugadores != '' && apodoOk===false) {

    return (
      <main className='board'>
        <h1>Puntos 10mil</h1>
        <FormApodos numberOfInputs={cantidadJugadores} inputApodos={inputApodos} setInputApodos={setInputApodos} setApodoOk={setApodoOk} setJugadores={setJugadores} />
        <footer>
          <button className='reset' onClick={resetGame}>Reset</button>
        </footer>
      </main>
    );

  } if (apodoOk) {

    console.log(jugadores);
    console.log(`Turno ${turno}`);
    console.log(`jugadores[turno]).apodo ${(jugadores[turno]).apodo}`);
    console.log(`jugadores[turno]).puntos ${(jugadores[turno]).puntos}`);


    return (
      <main className='tablerito'>
        <h1>10mil</h1>
        <p>Puntos</p>
        <div>
          <FichaPersonal jugadores={jugadores} />
        </div>
        {!fin && <div className='formPuntos'>
            <FormPuntos index={turno} jugador={jugadores[turno]} onPuntosChange={handlePuntosChange} siguienteTurno={siguienteTurno} winner={winner}/>
        </div>}
        {winner && <Ganador setFin={setFin} setWinner={setWinner} apodoWinner={apodoWinner}/>}
        

        <footer>
          <button className='reset' onClick={resetGame}>Reset</button>
        </footer>
      </main>
    );
  };
};

export default App

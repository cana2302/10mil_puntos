import { useState } from 'react';
import FormInicial from './components/FormInicial';
import FormApodos from './components/FormApodos';
import dado from './assets/dados_negros.png';
import TablaPuntos from './components/TablaPuntos';
import FormPuntos from './components/FormPuntos';
import TablaGanador from './components/TablaGanador';
import Ganador from './components/Ganador';

function App() {

  // Estado MENU (inicio || apodos || jugando || ganador)
  const [menu, setMenu] = useState(() => {
    const menuFromStorage = window.localStorage.getItem('menu')
    return menuFromStorage ? menuFromStorage : 'inicio';
  });
  
  // Estado CANTIDADJUGADORES (número de jugadores)
  const [cantidadJugadores, setCantidadJugadores] = useState(() => {
    const cantidadJugadoresFromStorage = window.localStorage.getItem('cantidadJugadores')
    return cantidadJugadoresFromStorage ? JSON.parse(cantidadJugadoresFromStorage) : 0;
  });

  // Estado JUGADORES ([{apodo, puntos, missin, turno, winner}])
  const [jugadores, setJugadores] = useState(() => {
    try {
      const jugadoresFromStorage = window.localStorage.getItem('jugadores');
      return jugadoresFromStorage ? JSON.parse(jugadoresFromStorage) : [];
    } catch (e) {
      console.error("Error parsing jugadores from storage", e);
      return [];
    }
  });

  // Estado WINNER (true or false)
  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    return winnerFromStorage ? JSON.parse(winnerFromStorage) : false;
  });

  // Estado JUGADOR ACTUAL (Índice del jugador actual)
  const [currentJugador, setCurrentJugador] = useState(() => {
   const currentJugadorFromLocalStorage = window.localStorage.getItem('currentJugador')
   return currentJugadorFromLocalStorage ? JSON.parse(currentJugadorFromLocalStorage) : 0
  })

  //Función que cambia el estado 'menu' -> 'apodos'
  const menu2 = () => {
    window.localStorage.setItem('menu', 'apodos');
    setMenu('apodos')
  }

  //Función que cambia el estado 'menu' -> 'jugando'
  const menu3 = () => {
    window.localStorage.setItem('menu', 'jugando');
    setMenu('jugando')
  }

  //Función que cambia el estado 'menu' -> 'ganador'
  const menu4 = () => {
    window.localStorage.setItem('menu', 'ganador');
    setMenu('ganador')
  }

  // Función que resetea los todos los estados del componente
  const resetGame = () => {
    const confirmacion = window.confirm('¿Estás seguro de resetear?');
    if (confirmacion) {
      window.localStorage.removeItem('menu');
      window.localStorage.removeItem('cantidadJugadores');
      window.localStorage.removeItem('jugadores');
      window.localStorage.removeItem('winner');
      window.localStorage.removeItem('apodos');
      window.localStorage.removeItem('currentJugador');
      setMenu('inicio');
      setCantidadJugadores(0);
      setJugadores([]);
      setWinner(false);
      setCurrentJugador(0);
    }
  }

  console.log(jugadores);
  

  //---------------------------------------------

  if (menu === 'inicio') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <FormInicial cantidadJugadores={cantidadJugadores} setCantidadJugadores={setCantidadJugadores} menu2={menu2} />
        <br />
        <img src={dado} alt="dados" />
      </main>
    )
  } if (menu === 'apodos') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <FormApodos cantidadJugadores={cantidadJugadores} setJugadores={setJugadores} menu3={menu3} />
        <br />
        <img src={dado} alt="dados" />
        <footer className='reset'>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </main>
    )
  } if (menu === 'jugando') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <TablaPuntos jugadores={jugadores} /> 
        <br />
        <FormPuntos cantidadJugadores={cantidadJugadores} jugadores={jugadores} setJugadores={setJugadores} setWinner={setWinner} menu4={menu4} currentJugador={currentJugador} setCurrentJugador={setCurrentJugador} />
        <img src={dado} alt="dados" />
        <footer className='reset'>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </main>
    )
  } if (menu === 'ganador') {
    return (
      <main className='pantalla'>
        <h1>10mil</h1>
        <br />
        <TablaGanador jugadores={jugadores} /> 
        <br />
        <img src={dado} alt="dados" />
        <footer className='reset'>
          <button onClick={resetGame}>Reset</button>
        </footer>
        {winner && <Ganador jugadores={jugadores} setWinner={setWinner}/>}
    
      </main>
    )
  }


}

export default App

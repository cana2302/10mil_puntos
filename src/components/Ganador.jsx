import confetti from 'canvas-confetti';
import { useState } from 'react';

const Ganador = ({ nuevosJugadores, index, winner, setWinner }) => {

  //if (winner === null) return null

  const cerrar = () => {
    setWinner(null);
  }

  confetti();

  return (
    <div className='winner'>
      <div className='text'>
        <h2>Ganador</h2>
        <h2 className='win'>{nuevosJugadores[index].apodo}</h2>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  )

}
export default Ganador
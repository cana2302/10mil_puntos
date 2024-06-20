import confetti from 'canvas-confetti';
import { useState } from 'react';

const Ganador = ({ setFin, setWinner, apodoWinner }) => {


  const cerrar = () => {
    setWinner(false);
    setFin(true);
  }

  confetti();

  return (
    <div className='winner'>
      <div className='text'>
        <h2>Ganador</h2>
        <h2 className='win'>{apodoWinner}</h2>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  )

}
export default Ganador
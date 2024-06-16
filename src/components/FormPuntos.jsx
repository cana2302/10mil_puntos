import { useState } from 'react';

const FormPuntos = ({ index, jugador, onPuntosChange, siguienteTurno, winner }) => {

  const [puntosInput, setPuntosInput] = useState('');


  const handleInputChange = (e) => {
    setPuntosInput(e.target.value);
  };

  const handleConfirmarClick = () => {
    if (puntosInput !== '') {
      onPuntosChange(index, puntosInput);
      setPuntosInput('');
      if (winner !== true) {
        siguienteTurno();
      };
    }
  };


  return (
    <div>
      <div>
        <h3>{jugador.apodo}</h3>
      </div>
      <div>
        <input type='number' value={puntosInput} onChange={handleInputChange} placeholder=' puntos'/>
      </div>
      <div>
        <button onClick={handleConfirmarClick} disabled={puntosInput === ''}>Enter</button>
      </div>       
    </div>
  )
}
export default FormPuntos
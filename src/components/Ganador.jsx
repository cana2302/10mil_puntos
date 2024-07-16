import confetti from 'canvas-confetti';

const Ganador = ({ jugadores, setWinner }) => {

  const obtenerGanador = (jugadores) => {
    const ganador = jugadores.find(jugador => jugador.ganador === true);
    return ganador ? ganador.apodo : 'No hay ganador';
  };

  const cerrar = () => {
    window.localStorage.setItem('winner', JSON.stringify(false));
    setWinner(false);
  }

  confetti();

  return (
    <div className='winner'>
      <div className='text'>
        <h2>Ganador</h2>
        <h2 className='win'>{obtenerGanador(jugadores)}</h2>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  )

}
export default Ganador
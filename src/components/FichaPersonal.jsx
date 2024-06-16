const FichaPersonal = ({jugadores}) => {

  const jugadoresPuntos = [...jugadores];

  return (
    <div>
      {jugadoresPuntos.map((jugador, index) => (
        <div key={index}>
          <h3>{jugador.apodo}: {jugador.puntos} puntos</h3>
          <p>faltan: {jugador.missing}</p>
        </div>

      ))}
    </div>
  )
}
export default FichaPersonal
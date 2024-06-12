const FichaPersonal = ({jugadores}) => {

  const jugadoresPuntos = [...jugadores];

  return (
    <div>
      {jugadoresPuntos.map((jugador, index) => (
        <h3 key={index}>{jugador.apodo}: {jugador.puntos} puntos</h3>
      ))}
    </div>
  )
}
export default FichaPersonal
const TablaPuntos = ({ jugadores }) => {

  const jugadoresInfo = [...jugadores];

  // Ordenar de mayor a menor por 'puntos'
  jugadoresInfo.sort((a, b) => b.puntos - a.puntos);

  const tableStyle = {
    width: '350px',
    borderCollapse: 'separate',
    textAlign: 'center',
    padding: '8px',
    border: '2px solid white',
    borderRadius: '10px' /* Puntas redondeadas */
  };

  const cellStyle = {
    textAlign: 'center',
    padding: '6px',
  };

  const thStyle = {
    ...cellStyle,
    width: '15%',
  };

  const thApodoStyle = {
    ...cellStyle,
    width: '35%',
  };

  const thPuntosStyle = {
    ...cellStyle,
    width: '30%',
  };

  const thMissingStyle = {
    ...cellStyle,
    width: '20%',
  };

  return (
    <div className='tabla_puntos'>
      <table style={tableStyle}>
      <thead>
          <tr>
            <th style={thStyle}>Puesto</th>
            <th style={thApodoStyle}>Apodo</th>
            <th style={thPuntosStyle}>Puntos</th>
            <th style={thMissingStyle}>Faltan</th>
          </tr>
        </thead>
        <tbody>
          {jugadoresInfo.map((jugador, index) => (
            <tr key={index} className={jugador.turno ? 'highlight' : ''}>
              <td style={thStyle}>{index + 1}°</td>
              <td style={thApodoStyle}>{jugador.apodo}</td>
              <td style={thPuntosStyle}>{jugador.puntos}</td>
              <td style={thMissingStyle}>({jugador.missing})</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}
export default TablaPuntos
//Funciones de logica para llevar los puntos:

//Función que recibo los puntos ingresados y evelua se ejecuta
export const sumarPuntos = (jugadores, turno, puntosDelInput) => {
  if (jugadores[turno].puntos < 10000) {
    jugador.puntos = jugador.puntos + puntosDelInput;
    if (jugadores[turno].puntos === 10000) {
      return jugadores[turno].apodo;
    }
    if (jugadores[turno].puntos > 10000) {
      jugadores[turno].puntos = jugadores[turno].puntos - puntosDelInput
      return false
    };
  };
}

// Devuelve apodo del ganador o ''
export const checkWinner = (jugadores, turno, puntosDelInput) => {
  const nombreGanador = sumarPuntos(jugadores, turno, puntosDelInput);
  if (nombreGanador != false) {
    return nombreGanador;
  } else {
    return '';
  }
}

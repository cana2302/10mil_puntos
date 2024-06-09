import { useState } from 'react';
import confetti from 'canvas-confetti';
import TablaPuntos from './components/TablaPuntos.jsx';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    }
  );
  
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  });

  const [winner, setWinner] = useState(null); // null => sin ganador aún; false => hay empate

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    // Si en la posición ya existe un valor ó tenemos un ganador, finaliza:
    if (board[index] || winner) return
    // actualizar el tablero:
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno:
    const newTurn = (turn === TURNS.X ? TURNS.O : TURNS.X)
    setTurn(newTurn);
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    // revisar si hay ganador:
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    } // TODO: check is game is over
  }

  return (
    <main className='board'>

      <h1>Puntos 10mil</h1>

      <button onClick={resetGame}>Reset del juego</button>

      <section className='game'>
        <TablaPuntos />
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App

import { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const winning_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const turns = {
    O: "O",
    X: "X",
  };

  const [turn, setTurn] = useState(turns.O);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(new Array(9).fill(null));

  const resetGame = () => {
    setTurn(turns.O);
    setWinner(null);
    setBoard(new Array(9).fill(null));
  };

  const checkBoard = (index) => {
    // 1. Si ya hay ganador, no hacer nada
    if (winner) return;

    // 2. Si la casilla ya está ocupada, no hacer nada
    if (board[index] !== null) return;

    // 3. Crear copia y marcar
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // 4. Comprobar si hay ganador
    if (checkWinner(newBoard)) {
      setWinner(turn);
      return; // Salir, NO cambiar turno
    }

    // 5. Comprobar si hay empate (tablero lleno)
    if (checkFullness(newBoard)) {
      setWinner("Empate");
      return; // Salir, NO cambiar turno
    }

    // 6. Si no hay ganador ni empate, cambiar turno
    changeTurn();
  };

  const checkFullness = (newBoard) => {
    // Devuelve true si todas las casillas están ocupadas
    return newBoard.every((casilla) => casilla !== null);
  };

  const checkWinner = (newBoard) => {
    for (let combinacion of winning_combos) {
      let [pos1, pos2, pos3] = combinacion;
      if (
        newBoard[pos1] &&
        newBoard[pos1] === newBoard[pos2] &&
        newBoard[pos2] === newBoard[pos3]
      ) {
        return true; // ✅ Hay ganador
      }
    }
    return false; // ❌ No hay ganador
  };

  const changeTurn = () => {
    const newTurn = turn === turns.O ? turns.X : turns.O;
    setTurn(newTurn);
  }

  return (
    <>
      <div className="board-wrapper">
        <h2 className="board-title p-12">Tic Tac Toe</h2>
        {!winner && <p className="text-center">Turno de: {turn}</p>}
        <div className="board-grid">
          {board.map((value, index) => (
            <Square key={index} value={value} onClick={() => checkBoard(index)} />
          ))}
        </div>
      </div>

      {winner && (
        <div className="mt-10">
          <h2 className="m-6">
            {winner === "Empate" ? "¡Empate!" : `El ganador es ${winner}`}
          </h2>
          <button
            className="bg-blue-500 p-2 mb-5 text-white rounded-xl"
            onClick={resetGame}
          >
            Reiniciar
          </button>
        </div>
      )}
    </>
  );
};

export default Board;

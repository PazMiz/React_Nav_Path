import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill('')); // board set 9 blocks
  const [playerTurn, setPlayerTurn] = useState('X'); // x turn now
  const [winner, setWinner] = useState(null); // who won 

  const handleClick = (index) => {
    if (board[index] === '' && !winner) { // empty or winner 
      const newBoard = [...board];
      newBoard[index] = playerTurn;
      setBoard(newBoard);

      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];

      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
          setWinner(newBoard[a]);
          return;
        }
      }

      setPlayerTurn(playerTurn === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill('')); 
    setPlayerTurn('X');
    setWinner(null);
  };

  const renderSquare = (index) => {
    const color = board[index] === 'X' ? 'red' : 'blue';
    return (
      <button className="square" onClick={() => handleClick(index)}>
        <span style={{ color }}>{board[index]}</span>
      </button>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((square, index) => (
          <div key={index} className="square-container">
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${playerTurn}`}
      </div>
      <button className="reset" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;

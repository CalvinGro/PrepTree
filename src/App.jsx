import { useState } from 'react';
import { Board } from './board.js';
import { startingBoard } from './starting_locations.js';
import './App.css';

function App() {
  const [board, setBoard] = useState(startingBoard);
  const [selected, setSelected] = useState(null);
  // Helper function to get valid moves for a specific piece from the engine
  function getValidMovesForSelected() {
    if (!selected) return new Set();
    const allMoves = board.findValidMoves();
    const key = `${selected[0]},${selected[1]}`;
    return allMoves.has(key) ? allMoves.get(key) : new Set();
  }

  function handleSquareClick(r, c) {
    const oldpiece = board.locations[selected[0]][selected[1]];
    const piece = board.locations[r][c];
    const clickKey = `${r},${c}`;

    // If we have a piece selected, try to move it
    if (selected) {
      const validMoves = getValidMovesForSelected();
      
      if (validMoves.has(clickKey)) {
        
        if ((r === 7 || r ===0)&&oldpiece.type==='pawn' ){
          console.log("bruh");
          board.makeMove(selected, [r, c], "queen");
        }
        else{
          board.makeMove(selected, [r, c]);
        }

        board.turn = board.opColor();

        // Create a new Board instance so React detects the state change
        const newBoard = new Board(
          [...board.locations.map(row => [...row])], 
          board.turn,
          board.en_passant,
          board.WLC, board.WRC, board.BLC, board.BRC
        );
        
        setBoard(newBoard);
        setSelected(null);
        return;
      }
    }

    // Select piece
    if (piece && piece.color === board.turn) {
      setSelected([r, c]);
    } else {
      setSelected(null);
    }
  }

  const currentValidMoves = getValidMovesForSelected();
  const displayRows = [...board.locations].reverse();

  return (
    <div className="game-container">
      <h1>PrepTree Chess</h1>
      
      <div className="status-bar">
        <div className={`turn-badge ${board.turn === 0 ? 'white-turn' : 'black-turn'}`}>
          {board.turn === 0 ? "White to Move" : "Black to Move"}
        </div>
        {board.isInCheck() && <div className="check-indicator">CHECK!</div>}
      </div>

      <div className="board">
        {displayRows.map((row, reverseR) => {
          const r = 7 - reverseR;
          return row.map((piece, c) => {
            const isSelected = selected && selected[0] === r && selected[1] === c;
            const isValidMove = currentValidMoves.has(`${r},${c}`);
            const isDark = (r + c) % 2 === 0;

            return (
              <div 
                key={`${r}-${c}`}
                className={`square ${isDark ? 'dark' : 'light'} ${isSelected ? 'selected' : ''}`}
                onClick={() => handleSquareClick(r, c)}
              >
                <span className="piece">{piece ? piece.display() : ""}</span>
                {isValidMove && <div className="dot"></div>}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;

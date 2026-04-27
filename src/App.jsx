import { useState } from 'react';
import { Game } from './game.js';
import './App.css';

const curGame = new Game();

export default function App() {
    const [board, setBoard] = useState(curGame.curBoard);
    const [selected, setSelected] = useState(null);

    function userClick(r, c) {
        if (selected) {
            const moves = curGame.getMovesFromSquare(selected);
            let isValid = false;
            for (let m of moves) {
                if (m[0] === r && m[1] === c) {
                    isValid = true;
                }   
            }
            if (isValid) {
                curGame.movePiece(selected, [r, c]);
                
                setBoard({ ...curGame.curBoard, locations:[...curGame.curBoard.locations] });
            }
            
            setSelected(null);
        } 

        else {
            const piece = board.locations[r][c];
            if (piece && piece.color === board.turn) {
                setSelected([r, c]);
            }
        }

    }

    return (
        <div className="game-container">
            <h1>{curGame.state}</h1>
            <p>Turn: {board.turn === 0 ? 'White' : 'Black'}</p>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(8, 50px)',
                width: '400px', 
                margin: '0 auto',
                border: '2px solid black' 
            }}>
                {board.locations.map((row, r) =>
                    row.map((piece, c) => (
                        <div
                            key={`${r}-${c}`}
                            onClick={() => userClick(r, c)} 
                            style={{
                                width: 50,
                                height: 50,
                                backgroundColor: selected?.[0] === r && selected?.[1] === c 
                                    ? 'yellow' 
                                    : (r + c) % 2 === 0 ? '#d2eed9' : '#543b00',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '20px',
                                color: 'black',
                                fontWeight: 'bold',
                                userSelect: 'none'
                            }}
                        >
                            {piece ? `${piece.type[0]}${piece.color === 0 ? 'W' : 'B'}` : ''}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
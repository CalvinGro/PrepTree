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
                const oldpiece = board.locations[selected[0]][selected[1]];

                if((r===7 || r===0) && oldpiece.type==="pawn"){
                    const choice = window.prompt("Promote to: queen, knight, rook, or bishop?", "queen");
                    const valid = ["queen", "knight", "rook", "bishop","king"];
                    const promotion = valid.includes(choice.toLowerCase()) ? choice.toLowerCase() : "queen";
                    curGame.movePiece(selected, [r, c], promotion);
                }
                else{
                    curGame.movePiece(selected, [r, c]);
                }
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
            <p>Turn: {board.turn === 0 ? 'Black' : 'White'}</p>

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
                                fontSize: '40px',
                                color: piece ? (piece.color === 0 ? 'black' : 'white') : 'transparent',
                                textShadow: piece ? (piece.color === 0 ? '0 0 3px white' : '0 0 3px black') : 'none',
                                userSelect: 'none'
                            }}
                        >
                            {piece ? piece.display() : ''}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
import { Piece, Board } from "./board.js";
import { Game } from "./game.js";
import { startingBoard } from "./starting_locations.js";

// startingBoard.displayBoardInTerminal();

// console.log(startingBoard.findValidMoves());
// console.log(startingBoard.findKnightMoves()); 
// startingBoard.makeMove([0,1],[2,1]);
// startingBoard.makeMove([0,2],[2,2]);
// startingBoard.makeMove([0,3],[2,3]);
// startingBoard.makeMove([0,5],[2,5]);
// startingBoard.makeMove([0,6],[2,6]);
// startingBoard.displayBoardInTerminal();

// console.log(startingBoard.findValidMoves());
// startingBoard.displayBoardInTerminal();
// startingBoard.makeMove([0,4],[0,6]);
// startingBoard.displayBoardInTerminal();

let first_game = new Game();
first_game.playTerminalGame();

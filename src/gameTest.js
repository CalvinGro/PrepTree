import { Game } from "./game.js";
import { startingBoard } from "./starting_locations.js";


let first_game = new Game();
console.log(first_game.getMovesFromSquare([0,1]));

console.log(first_game.movePiece([1,5],[3,5]));
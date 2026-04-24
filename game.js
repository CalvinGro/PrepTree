/** 
 * Author   - Calvin Gross and Silas Curtis
 * Date     - 4/23/25
 * Modified - 4/24/25
 * Title    - The Game
 * Description - This file defines ...
*/

import { startingBoard } from "./starting_locations.js";
import { Piece, Board } from "./board.js";

// ChatGPT generated, necessary for terminal input
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}



export class Game {
    constructor(board = startingBoard, state = "active") {
        this.board = board;
        this.state = state; // "active", "checkmate", "stalemate"
    }

    async playTerminalGame() {
        while (this.state === "active") {
            // display board
            this.board.displayBoardInTerminal();


            // get valid moves
            let no_moves = true;
            let moves = new Map();
            moves = this.board.findValidMoves()

            // if no moves determine outcome and end the game
            for (const [startPos, endSet] of moves) {
                if (!(endSet.size === 0)) {
                    no_moves = false;
                    break;
                }
            }

            if (no_moves && this.board.isInCheck()) {
                if (this.board.turn === 0) {
                    console.log("Black Wins by Checkmate!");
                } else {
                    console.log("White Wins by Checkmate!");
                }
                this.state = "checkmate";
                break;
            }   else if (no_moves) {
                console.log("Stalemate, no one wins.");
                this.state = "stalemate";
                break;
            }   

            let move_invalid = true;
            // input move, loop until valid
            while (move_invalid) {
                let startInput = await ask("Enter location of piece you are moving (row,col): ");
                let endInput = await ask("Enter location of where you put it (row,col): ");

                if (startInput === "show moves") {
                    console.log(moves);
                }
                
                // validate move
                if (moves.has(startInput) && moves.get(startInput).has(endInput)) {
                    move_invalid = false;

                    startInput = startInput.split(",").map(Number);
                    endInput = endInput.split(",").map(Number);
                    // make move
                    this.board.makeMove(startInput, endInput);
                }
            }
            
            // switch to next player
            this.board.turn = this.board.opColor();
        }
    }
}
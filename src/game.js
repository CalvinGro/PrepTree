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
    constructor(curBoard = startingBoard, state = "active") {
        this.curBoard = curBoard;
        this.state = state; // "active", "checkmate", "stalemate"
        this.prevBoards = new Map();
        this.prevBoardsCount = 1;
        this.currentMoves = new Map();
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


                    let promotion = null;
                    const valid_promotions = new Set(["knight", "rook", "bishop", "queen"]);
                    let invalid_promotion = true;
                    if ((endInput[0] === 7 || endInput[0] === 0) && this.board.locations[startInput[0]][startInput[1]].type === "pawn") {
                        while (invalid_promotion) {
                            promotion = await ask("What do you want to promote to?: ")
                            console.log(promotion);
                            if (valid_promotions.has(promotion)) {
                                invalid_promotion = false;
                            }
                        }
                    }


                    if (promotion === null) {
                        this.board.makeMove(startInput, endInput)
                    } else {
                        // make move
                        this.board.makeMove(startInput, endInput, promotion);
                    }
                }
            }
            
            // switch to next player
            this.board.turn = this.board.opColor();
        }
    }

    getMovesFromSquare(square) {

        if (this.currentMoves.size === 0) {
            this.currentMoves = this.curBoard.findValidMoves();
        }

        const [y,x] = square;
        const squareKey = y+","+x;
        let moves = new Set();
        if (this.curBoard.locations[y][x] instanceof Piece) {
            moves = this.currentMoves.get(squareKey);
        }
        let unconcatMoves = new Set();
        for (let move of moves) {
            unconcatMoves.add(move.split(",").map(Number));
        }
        return unconcatMoves;
    }

    piecesLeftCount() {
        let count = 0;
        for (const row of this.curBoard.locations) {
            for (const sq of row) {
                if (sq instanceof Piece) {
                    count++;
                }
            }
        }
        return count;
    }

    boardStr() {
        let boardStr = [];

        for (const row of this.curBoard.locations) {
            for (const sq of row) {
                if (sq === null) boardStr.push(" ");
                else boardStr.push(sq.type + sq.color);
            }
        }
        return boardStr.join("");
    }


    movePiece(start, end, promoteTo = null) {
        // start and end are in form [1,2] not strings

        const pieceCountBefore = this.piecesLeftCount();
        const startStr = start[0] + "," + start[1];
        const endStr = end[0] + "," + end[1];

        this.curBoard.makeMove(start, end, promoteTo);
        this.curBoard.turn = this.curBoard.opColor();

        this.currentMoves = this.curBoard.findValidMoves();

        // check for stalemate or checkmate
        if (this.currentMoves.size === 0) {
            if (this.curBoard.isInCheck) {
                if (this.curBoard.turn === 0) {
                    this.state = "Black Wins by Checkmate";
                } else {
                    this.state = "White Wins by Checkmate";
                }
            }   else {
                this.state = "Stalemate, No Available Moves";
            }
        }

        // check for 3-fold rep or 50 move rule
        if (this.state === "active") {


            // detect pawn move or piece take and reset prevBoards and count
            const pieceCountAfter = this.piecesLeftCount();
            if (this.curBoard.locations[end[0]][end[1]].type === "pawn" || pieceCountBefore !== pieceCountAfter) {
                this.prevBoards = new Map();
                this.prevBoardsCount = 0;
            }


            // add current to prevBoards map
            if (this.prevBoards.has(this.boardStr())) {
                this.prevBoards.set(this.boardStr(), this.prevBoards.get(this.boardStr()) + 1);
            } else this.prevBoards.set(this.boardStr(), 1);
            this.prevBoardsCount++;

            // change state if needed
            if (this.prevBoards.get(this.boardStr()) === 3) {
                this.state = "Stalemate, 3-Fold Repitition";
            } else if (this.prevBoardsCount >= 50) {
                this.state = "Stalemate, 50 Move Rule";
            }
        }

        // will return board
        // will return state
        return [this.curBoard, this.state];
    }

}

import { startingBoard } from "./starting_locations.js";
import { Piece, Board } from "./board.js";
import * as testBd from "./testBoard.js"



//      TDD Verify Pawn Promotion
// This starts on whites turn, this verifies that when a white 
// pawn is moved to the 7th rank amd a piece type is inputted,
// the pawn is promoted to that piece.
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    | ♟  |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//  ♚  |    |    |    |    |    |    | ♔
// _______________________________________
testBd.promotionBoard.makeMove([6,5], [7,5], "queen");
if (testBd.promotionBoard.locations[7][5].type === "queen") {
    console.log("Passed Pawn Promotion Verification.");
} else {
    console.log("Did not Pass Pawn Promotion Verification.");
}
testBd.promotionBoard.displayBoardInTerminal();


//      Verify Knight Moves
// On whites turn they can move their knight to take either of 
// the two black pawns, or to the free square (2,1). 3 of their
// moves are blocked by their pawns, and 2 more are out of bounds.
// This test verifies that there are 3 valid moves, and they are 
// the taking the black pawns, or the open square.
// ChatGPT was used to generate the board and piece locations.
// _______________________________________
//  ♚  |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    | ♔
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    | ♟  |    |    |  
// _______________________________________
//     | ♟  |    |    |    | ♙  |    |  
// _______________________________________
//     |    |    | ♞  |    |    |    |  
// _______________________________________
//     | ♟  |    |    |    | ♙  |    |  
// _______________________________________

let knightMoves = testBd.knightMoveBoard.findValidMoves().get("1,3");
if (knightMoves.size === 3 && knightMoves.has("3,2") && knightMoves.has("2,5") && knightMoves.has("0,5")) {
    console.log("Passed Knight Move Verification.");
} else {
    console.log("Did not pass Knight Move Verification.");
}



//      Verify Bishop Moves
// This starts on blacks turn and extracts the moves generated for 
// the bishop out from findValidMoves. Then it verifies that each move
// exists and no others.
// _______________________________________
//     |    | ♘  |    |    |    |    | ♔
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    | ♗  |    |  
// _______________________________________
//     |    |    |    | ♟  |    |    |  
// _______________________________________
//     |    |    |    |    |    |    | ♞
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//  ♚  |    |    |    |    |    |    |  
// _______________________________________
let bishopMoves = testBd.BishopMoveBoard.findValidMoves().get("4,5");
const bishopCorrectMoves = ["5,6", "6,7", "5,4", "6,3", "3,4", "3,6", "2,7"];
if (bishopMoves.size === 7) {
    for (const corMove of bishopCorrectMoves) {
        if (!bishopMoves.has(corMove)) {
            console.log("Did not pass Bishop Move Verification.");
            break;
        }
    }
    console.log("Passed Bishop Move Verification.");
} else {
    console.log("Did not pass Bishop Move Verification.");
}



//      Verify Queen Moves
// This verifies that the queens moves are correct. I checks 
// that it can't take its own pieces and that it 
// _______________________________________
//  ♙  |    |    |    |    |    |    | ♔
// _______________________________________
//     | ♟  |    |    |    |    |    |  
// _______________________________________
//  ♛  |    |    |    |    |    | ♙  |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    | ♟  |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    |    |    |    |  
// _______________________________________
//     |    |    |    | ♚  |    |    |  
// _______________________________________
let queenMoves = testBd.queenMoveBoard.findValidMoves().get("5,0");
const queenCorrectMoves = ["6,0", "7,0", "5,1", "5,2", "5,3", "5,4", "5,5", 
                           "5,6", "4,1", "4,0", "3,0", "2,0", "1,0", "0,0"];
if (queenMoves.size === 14) {
    for (const corMove of queenCorrectMoves) {
        if (!queenMoves.has(corMove)) {
            console.log("Did not pass Queen Move Verification.");
            break;
        }
    }
    console.log("Passed Queen Move Verification.");
} else {
    console.log("Did not pass Queen Move Verification.");
}
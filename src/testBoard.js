

import { startingBoard } from "./starting_locations.js";
import { Piece, Board } from "./board.js";

// 
export let knightMoveBoard = new Board([
    [
        null,
        new Piece("pawn", 0),
        null,
        null,
        null,
        new Piece("pawn", 1),
        null,
        null
    ],
    [
        null,
        null,
        null,
        new Piece("knight", 0),
        null,
        null,
        null,
        null
    ],
    [
        null,
        new Piece("pawn", 0),
        null,
        null,
        null,
        new Piece("pawn", 1),
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        new Piece("pawn", 0),
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        new Piece("king", 1)
    ],
    [
        new Piece("king", 0),
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
], 0, [], false, false, false, false);

export let BishopMoveBoard = new Board([
    [
        new Piece("king", 0),
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        new Piece("knight", 0)
    ],
    [
        null,
        null,
        null,
        null,
        new Piece("pawn", 0),
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        new Piece("bishop", 1),
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        new Piece("knight", 1),
        null,
        null,
        null,
        null,
        new Piece("king", 1)
    ]
], 1, [], false, false, false, false);

export let promotionBoard = new Board([
    [new Piece("king", 0), null, null, null, null, null, null, new Piece("king", 1)],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, new Piece("pawn", 0), null, null],
    [null, null, null, null, null, null, null, null]
], 0, [], false, false, false, false);

export let queenMoveBoard = new Board([
    [
        null,
        null,
        null,
        null,
        new Piece("king", 0),
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        new Piece("pawn", 0),
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        new Piece("queen", 0),
        null,
        null,
        null,
        null,
        null,
        new Piece("pawn", 1),
        null
    ],
    [
        null,
        new Piece("pawn", 0),
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        new Piece("pawn", 1),
        null,
        null,
        null,
        null,
        null,
        null,
        new Piece("king", 1)
    ]
], 0, [], false, false, false, false);

export let enPassantBoard = new Board([
    [
        new Piece("rook", 0),
        new Piece("knight", 0),
        new Piece("bishop", 0),
        new Piece("queen", 0),
        new Piece("king", 0),
        new Piece("bishop", 0),
        new Piece("knight", 0),
        new Piece("rook", 0)
    ],
    [
        new Piece("pawn", 0),
        new Piece("pawn", 0),
        new Piece("pawn", 0),
        new Piece("pawn", 0),
        new Piece("pawn", 0),
        new Piece("pawn", 0),
        new Piece("pawn", 0),
        new Piece("pawn", 0)
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, new Piece("pawn", 1), null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
        new Piece("pawn", 1),
        new Piece("pawn", 1),
        new Piece("pawn", 1),
        null,
        new Piece("pawn", 1),
        new Piece("pawn", 1),
        new Piece("pawn", 1),
        new Piece("pawn", 1)
    ],
    [
        new Piece("rook", 1),
        new Piece("knight", 1),
        new Piece("bishop", 1),
        new Piece("queen", 1),
        new Piece("king", 1),
        new Piece("bishop", 1),
        new Piece("knight", 1),
        new Piece("rook", 1)
    ]], 0, [], true, true, true, true);


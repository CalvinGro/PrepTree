class Piece {
    constructor(type, color) {
        this.type = type   // "king", "queen", ...
        this.color = color // 0:white  1:black
    }

    opColor() {
        return (this.color + 1) % 2
    }
}


class Board {
    constructor(locations, turn = 0, en_passant = [], WLC = true, WRC = true, BLC = true, BRC = true) {
        this.locations = locations;
        this.WLC = WLC;               // white left castle
        this.WRC = WRC;               // white right castle
        this.BLC = BLC;               // black left castle
        this.BRC = BRC;               // black right castle
        this.en_passant = en_passant; // pos of skipped square after double pawn move
        this.turn = turn;             // 0:white  1:black
    }


    isInCheck() {
        // first find king
        let i = 0; // row
        let j = 0; // col
        let found = false;
        if (this.turn === 0) {
            for (const [n, row] of this.locations.entries()) {
                for (const [m, sq] of row.entries()) {
                    if (sq instanceof Piece && sq.color === 0 && sq.type === 'king') {
                        i = n;
                        j = m;
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                } 
            }
        }
        
        // next find knight checks
        let possible_knight_ck_locs = [[i+1,j+2], [i+1,j-2], [i-1,j+2], [i-1,j-2], [i+2,j+1], [i+2,j-1], [i-2,j+1], [i-2,j-1]]
        let knight_ck_locs = [];
        for (const [a,b] of possible_knight_ck_locs) {
            if (a < 7 && a >= 0 && b < 7 && b >= 0) {
                knight_ck_locs.push([a,b])
            }
        }
    }
}


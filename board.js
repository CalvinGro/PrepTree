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
        let i = -1; // row
        let j = -1; // col
        let found = false;
        for (const [n, row] of this.locations.entries()) {
            for (const [m, sq] of row.entries()) {
                if (sq instanceof Piece && sq.color === this.color && sq.type === 'king') {
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
        
        
        // find knight checks
        let knight_ck_locs = [[i+1,j+2], [i+1,j-2], [i-1,j+2], [i-1,j-2], 
                              [i+2,j+1], [i+2,j-1], [i-2,j+1], [i-2,j-1]];

        // filter out ones not on the board
        // if valid sq check if a opColor knight is on it
        for (const [a,b] of knight_ck_locs) {
            if (a <= 7 && a >= 0 && b <= 7 && b >= 0) {
                let sq = this.locations[a][b];
                if (sq instanceof Piece && sq.type === "knight" && sq.color === sq.opColor) {
                    return true;
                }
            }
        }

        // find straight checks
        // search up from king
        let x = 0;
        // while i + x
    }
}


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
        let kingsq = 0;
        let found = false;
        if (this.turn === 0) {
            for (const [i, row] of this.locations.entries()) {
                for (const [j, sq] of row.entries()) {
                    if (sq instanceof Piece && sq.color == 0 && sq.type == 'king') {
                        kingsq = [i, j];
                        found = true;
                        break;
                    }
                }
                if (found) {
                    break;
                } 
            }
        }

        // next check knight checks
        let knight_ck_locs = [[i,j]]
    }
}


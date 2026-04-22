class Game {
    constructor(){
        // Chess board represented as a 2D array
        // Each square contains [color, piece_type] or [] for empty
        // Color: 0 = black, 1 = white
        // Piece type: 1=pawn, 2=knight, 3=bishop, 4=rook, 5=queen, 6=king
        this.board = Board
        this.turn = 0;
        // states:
        // none, check, checkmate, stalemate, resign
        this.state = 'none';
    }

    handleClick(pos){
        let x, y = pos;

        
    }

    findAllPinnedPieces(){}
    getValidKingMoves(pos){
        // for each non-same color square around it check whether it has a piece defending it
    }
    getValidQueenMoves(pos){
    
    }
    getValidRookMoves(pos){}
    getValidBishopMoves(pos){}
    getValidKnightMoves(pos){}
    getValidPawnMoves(pos){}

}
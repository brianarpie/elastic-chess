export function convertAlgebraicToCoordinates(algebraicMove) {
    const move = algebraicMove.split('.')[1];
    const parts = move.split('');
    let piece, rowNumber, columnNumber;
    if (parts[0] == parts[0].toLowerCase()) {
        // pawn move
        piece = "Pawn";
        if (parts[1] == 'x') {
            // pawn takes _
            columnLetter = parts[2];
            rowNumber = parts[3];
        } else {
            // pawn moves forward
            columnLetter = parts[0];
            rowNumber = parts[1];
        }
        return {
            piece,
            columnLetter,
            rowNumber
        };
    } else {
        // piece move
        switch(parts[0]) {
            case "K": {
                // king move
            }
            case "Q": {
                // queen move
            }
            case "B": {
                // bishop move
            }
            case "N": {
                // knight move
            }
            case "R": {
                // rook move
            }
            case "O": {
                // special case: castle
            }
        }
    }
}

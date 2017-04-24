import * as _ from 'lodash';

export const initialState = {
    moves: [],
    currentMoveIndex: 0,
    chessboard: {
        'a': [
            {piece: 'Rook', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Rook', color: 'Black'},
        ],
        'b': [
            {piece: 'Knight', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Knight', color: 'Black'},
        ],
        'c': [
            {piece: 'Bishop', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Bishop', color: 'Black'},
        ],
        'd': [
            {piece: 'Queen', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Queen', color: 'Black'},
        ],
        'e': [
            {piece: 'King', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'King', color: 'Black'},
        ],
        'f': [
            {piece: 'Bishop', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Bishop', color: 'Black'},
        ],
        'g': [
            {piece: 'Knight', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Knight', color: 'Black'},
        ],
        'h': [
            {piece: 'Rook', color: 'White'},
            {piece: 'Pawn', color: 'White'},
            {}, {}, {}, {},
            {piece: 'Pawn', color: 'Black'},
            {piece: 'Rook', color: 'Black'},
        ],
    }
};

export default function chessboardReducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_GAME': {
            const moves = _.filter(action.game.Moves.split(' '), (value) => {
                return !/\d+\./.test(value);
            })
            return {
                ...state,
                moves: _.compact(moves),
                currentMoveIndex: 0,
                chessboard: initialState.chessboard
            };
        }
        case 'PLAY_NEXT_MOVE': {
            const nextMoveIndex = state.currentMoveIndex + 1;

            return {
                ...state,
                currentMoveIndex: nextMoveIndex
            }
        }
        default:
            return state;
    }
};

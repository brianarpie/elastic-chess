import * as _ from 'lodash';

// var Chess = require('./chess').Chess;
import Chess from 'chess.js';
var chess = new Chess();

export const initialState = {
    moves: [],
    currentMoveIndex: 0,
    chessboard: chess.board()
};

export default function chessboardReducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_GAME': {
            const moves = _.filter(action.game.Moves.split(' '), (value) => {
                return !/\d+\./.test(value);
            })
            chess.reset();
            return {
                ...state,
                moves: _.compact(moves),
                currentMoveIndex: 0,
                chessboard: initialState.chessboard
            };
        }
        case 'PLAY_PREVIOUS_MOVE': {
            const previousMoveIndex = state.currentMoveIndex - 1;
            // TODO move to an observable
            const lastMove = chess.undo();
            chess.move({from: lastMove.to, to: lastMove.from })

            return {
                ...state,
                currentMoveIndex: previousMoveIndex,
                chessboard: chess.board()
            }
        }
        case 'PLAY_NEXT_MOVE': {
            const nextMoveIndex = state.currentMoveIndex + 1;
            // TODO move to an observable
            chess.move(state.moves[state.currentMoveIndex], {sloppy: true});

            return {
                ...state,
                currentMoveIndex: nextMoveIndex,
                chessboard: chess.board()
            }
        }
        default:
            return state;
    }
};

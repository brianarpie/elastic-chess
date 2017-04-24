import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gameReducer, { initialState as gameInitialState } from './gameReducer';
import suggestionsReducer, { initialState as suggestionsInitialState } from './suggestionsReducer';
import chessboardReducer, { initialState as chessboardInitialState } from './chessboardReducer';

const initialState = {
    game: gameInitialState,
    suggestions: suggestionsInitialState,
    chessboard: chessboardInitialState
};

const rootReducer = (state = initialState, action) => {
    return {
        game: gameReducer(state.game, action),
        suggestions: suggestionsReducer(state.suggestions, action),
        chessboard: chessboardReducer(state.chessboard, action)
    }
}

export default () => {
    const logger = store =>
        next =>
            action => {
                console.debug('dispatch: ', action);
                const result = next(action);
                console.debug('state: ', store.getState());
                return result;
            }

    const store = createStore(rootReducer, applyMiddleware(thunk, logger));

    return store;
}

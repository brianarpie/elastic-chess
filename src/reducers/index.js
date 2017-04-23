import { createStore, applyMiddleware } from 'redux';

import gameReducer, { initialState as gameInitialState } from './gameReducer';

const initialState = {
    game: gameInitialState
};

const rootReducer = (state = initialState, action) => {
    return {
        game: gameReducer(state.game, action)
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

    const store = createStore(rootReducer, applyMiddleware(logger));

    return store;
}

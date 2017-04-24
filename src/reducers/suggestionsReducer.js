export const initialState = [];

export default function suggestionsReducer(state = initialState, action ) {
    switch(action.type) {
        case "FETCH_SUGGESTIONS_FAILURE": {
            console.debug('ERROR', action);
            return state;
        }
        case "FETCH_SUGGESTIONS": {
            return action.suggestions;
        }
        case "CLEAR_SUGGESTIONS": {
            return initialState;
        }
        default:
            return state;
    }
}

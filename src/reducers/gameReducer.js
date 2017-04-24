export const initialState = {
    metadata: {},
}

export default function gameReducer(state = initialState, action) {
    switch(action.type) {
        case 'SELECT_GAME': {
            return {
                metadata: { ...action.game }
            }
        }
        default:
            return state;
    }
}

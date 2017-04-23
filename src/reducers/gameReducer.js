export const initialState = {
    moves: [],
    metadata: {}
}

export default function gameReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return initialState
    }
}

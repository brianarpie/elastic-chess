import { queryPrefix } from '../lib/elasticsearch';

class Actions {
    static selectGame(game) {
        return { type: 'SELECT_GAME', game };
    }
    static playPreviousMove() {
        return { type: 'PLAY_PREVIOUS_MODE' }
    }
    static playNextMove() {
        return { type: 'PLAY_NEXT_MOVE' }
    }
    static clearSuggestions() {
        return { type: 'CLEAR_SUGGESTIONS' };
    }
    static fetchSuggestions(value) {
        return (dispatch, getState) => {
            queryPrefix(value)
                .then(resp => {
                    const hits = resp.hits.hits;
                    const suggestions = hits.map(h => {
                        return {
                            ...h._source,
                            Highlight: h.highlight
                        }
                    })

                    dispatch({
                        type: 'FETCH_SUGGESTIONS',
                        suggestions,
                    })
                }) 
                .catch(errors => {
                    dispatch({
                        type: 'FETCH_SUGGESTIONS_FAILURE',
                        errors
                    })
                })
        }
    }
}

export default Actions

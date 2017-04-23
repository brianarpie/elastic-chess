import { queryPrefix } from '../lib/elasticsearch';

class Actions {
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

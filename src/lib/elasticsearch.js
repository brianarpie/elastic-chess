import * as elasticsearch from 'elasticsearch';

let ESClient = new elasticsearch.Client({
    host: "search-elastic-chess-axtz3y4vd24ibwop5o7t4eorc4.us-east-1.es.amazonaws.com"
});

export const queryPrefix = (value) => {
    return ESClient.search({
        index: 'production',
        type: 'ChessGame',
        body: {
            query: {
                bool: {
                    must: {
                        multi_match: {
                            query: value,
                            fields: [
                                "Date", 
                                "White", 
                                "Black", 
                            ],
                            type: "cross_fields",
                            operator: "and"
                        }
                    }
                }
            },
            highlight: {
                fields: {
                    "*": {
                        require_field_match: false,
                        pre_tags: ["<u>"],
                        post_tags: ["</u>"]
                    }
                }
            }
        }
    })
}


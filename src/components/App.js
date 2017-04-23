import React, { Component } from 'react';
import { Provider } from 'react-redux';
import * as elasticsearch from 'elasticsearch';

import createStore from '../reducers';

import Chessboard from '../components/Chessboard';

let store = createStore();

let client = new elasticsearch.Client({
    host: "search-elastic-chess-axtz3y4vd24ibwop5o7t4eorc4.us-east-1.es.amazonaws.com"
});

client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Chessboard/>
        </Provider>
    );
  }
}

export default App;

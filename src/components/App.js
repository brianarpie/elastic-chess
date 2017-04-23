import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ESClient from '../lib/elasticsearch';

import createStore from '../reducers';

import Chessboard from '../components/Chessboard';
import SearchInput from '../components/SearchInput';

let store = createStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div>
                <SearchInput/>
                <Chessboard/>
            </div>
        </Provider>
    );
  }
}

export default App;

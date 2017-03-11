import React, { Component } from 'react';
import './App.css';
import Search from "./search";
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Search />
      </Provider>
    );
  }
}

export default App;

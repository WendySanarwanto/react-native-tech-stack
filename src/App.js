import React, { Component } from 'react';
import {  View, } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

const appStore = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    const { mainViewStyle } = styles;
    return (
      <Provider store={appStore}>
        <View style={mainViewStyle}>
          <Header title="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const styles = {
  mainViewStyle: {
    flex: 1,
  },
};

export default App;

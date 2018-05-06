import React, { Component } from 'react';
import {  View, } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers)} >
        <View>
          <Header title="Tech Stack"/>     
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

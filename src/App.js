import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Header } from './components/common';
import reducers from './reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={ createStore(reducers)} >
        <View>
          <Header title="Tech Stack"/>     
          <Text> Tech Stack App ! </Text>
        </View>
      </Provider>
    );
  }
}

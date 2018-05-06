import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default connect()(LibraryList);

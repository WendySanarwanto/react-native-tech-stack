import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    const { libraries } = this.props;
    // console.log(`[DEBUG] - <LibraryList.render> - libraries: \n`, libraries);

    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  // console.log(`[DEBUG] - <LibraryList.mapStateToProps> - state: \n`, state);
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);

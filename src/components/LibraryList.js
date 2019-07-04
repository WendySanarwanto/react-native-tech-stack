import React, { Component } from 'react';
import {  ListView } from 'react-native';
import { connect } from 'react-redux';

import { fetchLibrary } from '../actions';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentDidMount() {
    this.props.fetchLibrary();
  }

  renderRow(library) {
    return <ListItem item={library} />
  }

  createListDataSource(libraries) {
    const listDataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return listDataSource.cloneWithRows(libraries);
  }

  render() {
    const { libraries } = this.props;
    if (!libraries) return null;

    const listDataSource = this.createListDataSource(libraries);

    return (
      <ListView 
        dataSource={ listDataSource }
        renderRow={this.renderRow} />
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  // console.log(`[DEBUG] - <LibraryList.mapStateToProps> - state: \n`, state);
  return {
    libraries
  };
};

export default connect(mapStateToProps, {fetchLibrary})(LibraryList);

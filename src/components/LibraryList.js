import React, { Component } from 'react';
import {  ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  componentWillMount() {
    const { libraries } = this.props;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = dataSource.cloneWithRows(libraries);
  }

  renderRow(library) {
    return <ListItem item={library} />
  }

  render() {
    // const { libraries } = this.props;
    // console.log(`[DEBUG] - <LibraryList.render> - libraries: \n`, libraries);

    return (
      <ListView 
        dataSource={this.dataSource}
        renderRow={this.renderRow} />
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

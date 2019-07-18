import React, { Component } from 'react';
import {
  LayoutAnimation,
  Platform,
  Text,
  TouchableWithoutFeedback,
  UIManager,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import { selectLibrary } from '../actions';
// import * as actions from '../actions';

class ListItem extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android'){
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescriptionPanel = (
    expanded,
    selectedLibraryDescription,
    descriptionStyle
  ) => {
    if (!expanded) {
      return null;
    }

    return (
      <CardSection>
        <Text style={descriptionStyle}>{selectedLibraryDescription}</Text>
      </CardSection>
    );
  };

  render() {
    const { id, title } = this.props.item;
    const { descriptionStyle, titleStyle, titleViewStyle } = styles;
    const { expanded, selectedLibraryDescription } = this.props;
    console.log('[DEBUG] - <ListItem> this.props:\n', this.props);

    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection style={titleViewStyle}>
              <Text style={titleStyle}>{title}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        {this.renderDescriptionPanel(
          expanded,
          selectedLibraryDescription,
          descriptionStyle
        )}
      </View>
    );
  }
}

const styles = {
  descriptionStyle: {
    fontSize: 16,
    flex: 1,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  titleStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  titleViewStyle: {
    backgroundColor: '#1a73e8',
  },
};

function mapStateToProps(state, ownProps) {
  return {
    expanded: state.selectedLibrary.id === ownProps.item.id,
    selectedLibraryDescription: state.selectedLibrary.description,
  };
}

export default connect(
  mapStateToProps,
  { selectLibrary }
)(ListItem);

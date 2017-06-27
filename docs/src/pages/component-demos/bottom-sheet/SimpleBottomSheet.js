/**
 * Created by zabieru on 6/27/2017.
 */
// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomSheet from 'material-ui/BottomSheet';

const styleSheet = createStyleSheet('SimpleBottomSheet', {
  root: {
    width: 500,
  },
});

class SimpleBottomSheet extends Component {

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <BottomSheet/>
      </div>
    );
  }
}

SimpleBottomSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleBottomSheet);

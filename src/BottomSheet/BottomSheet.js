/**
 * Created by zabieru on 6/26/2017.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Slide from '../transitions/Slide';
import Paper from '../Paper';

export const styleSheet = createStyleSheet('MuiBottomSheet', {
  root: {

  },
  paper: {
    position: 'fixed',
    bottom: 0,
    width: '800px',
    margin: '0 auto', /* Will not center vertically and won't work in IE6/7. */
    left: 0,
    right: 0,
  },
});

class BottomSheet extends Component{

  render(){
    const {
      classes,
      className,
      ...other
    } = this.props;

    return (
      <Slide
        in={true}
        direction='up'
        enterTransitionDuration={2}
        leaveTransitionDuration={2}
      >
        <Paper
          elevation={4}
          square
          className={classNames(classes.paper)}
        >
          <h1>Hello Sheet</h1>
        </Paper>
      </Slide>
    )
  }
}

export default withStyles(styleSheet)(BottomSheet);

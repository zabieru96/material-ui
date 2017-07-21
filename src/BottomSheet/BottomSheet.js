/**
 * Created by zabieru on 6/26/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Slide from '../transitions/Slide';
import Paper from '../Paper';
import Modal from '../internal/Modal';
import { duration } from '../styles/transitions';
import common from '../colors/common';
import {fade} from '../styles/colorManipulator'

export const styleSheet = createStyleSheet('MuiBottomSheet', {
  root: {

  },
  paper: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  heading: {
    'line-height': '56px',
    display: 'inline-block',
    'font-size': 16,
    color: fade(common.black, 0.54),
    width: '100%',
    'vertical-align' : 'middle',
    padding: '0 16px',
    'font-family' : 'Roboto',
  },
  inset: {
    width: '800px',
    margin: '0 auto', /* Will not center vertically and won't work in IE6/7. */
  },
  persistent: {
    'z-index' : 1400,
  }
});

class BottomSheet extends Component{

  static defaultProps = {
    enterTransitionDuration: duration.enteringScreen,
    leaveTransitionDuration: duration.leavingScreen,
    open: false,
    modal: false,
  };

  componentWillMount(){
    this.setState({
      open: this.props.open
    })
  }

  handleClose = () => {
    this.setState(
      {open: false}
    )
  };

  render(){
    const {
      classes,
      className,
      enterTransitionDuration,
      leaveTransitionDuration,
      children,
      open,
      heading,
      modal,
      ...other
    } = this.props;

    const header = heading? heading : "";

    if (modal) {
      return (
        <Modal
          backdropTransitionDuration={open ? duration.leavingScreen : duration.leavingScreen}
          show={open}
          {...other}
        >
          <Slide
            in={open}
            direction='up'
            enterTransitionDuration={300}
            leaveTransitionDuration={300}
          >
            <Paper
              elevation={4}
              square
              className={classNames(classes.paper)}
            >
              <span className={classNames(classes.heading)}>{header}</span>
              {children}
            </Paper>
          </Slide>
        </Modal>
      )
    }else{
      return (
        <div>
          <Slide
            in={open}
            direction='up'
            enterTransitionDuration={300}
            leaveTransitionDuration={300}
          >
            <Paper
              square
              className={classNames(classes.paper, classes.persistent)}
            >
              <span className={classNames(classes.heading)}>{header}</span>
              {children}
            </Paper>
          </Slide>
        </div>
      )
    }
  }
}

BottomSheet.propTypes = {
  /**
   * Used to display an optional heading within the component.
   */
  heading: PropTypes.string,
  /**
   * Toggle to determine the type of bottom sheet. If false and by default displays a persistent bottom sheet.
   */
  modal: PropTypes.bool,
  /**
   *
   */
};

export default withStyles(styleSheet)(BottomSheet);

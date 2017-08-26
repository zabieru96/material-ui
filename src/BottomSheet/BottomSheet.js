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
import { fade } from '../styles/colorManipulator';

const increment = 64;

export const styleSheet = createStyleSheet('MuiBottomSheet', theme => ({
  [theme.breakpoints.up('xs')]: {
    root: {
      minWidth: increment * 6,
      width: 'calc(100% - ' + increment + 'px)',
    }
  },
  [theme.breakpoints.up('md')]: {
    root: {
      minWidth: increment * 8,
      width: 'calc(100% - ' + increment * 2 + 'px)',
    }
  },
  [theme.breakpoints.up('lg')]: {
    root: {
      minWidth: increment * 9,
      width: 'calc(100% - ' + increment * 3 + 'px)',
    }
  },
  center: {
    margin: '0 auto',
  },
  paper: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: 'calc(100% - 64px)',
    overflowY: 'auto',
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
  noHeading: {
    height: 8,
    display: 'block',
  },
  persistent: {
    'z-index' : 1400,
  }
}));

class BottomSheet extends Component {
  static defaultProps = {
    enterTransitionDuration: duration.enteringScreen,
    leaveTransitionDuration: duration.leavingScreen,
    open: false,
    modal: false,
    inset: false,
  };

  componentWillMount(){
    this.setState({
      open: this.props.open,
    })
  };

  handleClose = () => {
    this.setState(
      {open: false},
    )
  };

  render(){
    const {
      classes,
      className,
      enterTransitionDuration,
      leaveTransitionDuration,
      children,
      inset,
      open,
      heading,
      modal,
      ...other,
    } = this.props;

    const header = heading ? heading : "";

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
              className={classNames({
                [classes.root]: inset,
                [classes.center]: inset,
                [classes.paper]: true,
              })}
            >
              <span className={classNames({
                [classes.heading]: heading,
                [classes.noHeading]: !heading,
              })}
              >
                {header}
              </span>
              {children}
            </Paper>
          </Slide>
        </Modal>
      )
    } else {
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
              className={classNames(classes.persistent, {
                [classes.root]: inset,
                [classes.center]: inset,
                [classes.paper]: true,
              })}
            >
              <span className={classNames({
                [classes.heading]: heading,
                [classes.noHeading]: !heading,
              })}
              >
                {header}
              </span>
              {children}
            </Paper>
          </Slide>
        </div>
      );
    }
  }
}

BottomSheet.propTypes = {
  /**
   * Used to display an optional heading within the component.
   */
  heading: PropTypes.string,
  /**
   * Used to display a fixed width Bottom Sheet.
   */
  inset: PropTypes.bool,
  /**
   * Toggle to determine the type of bottom sheet. If false and by default displays a persistent bottom sheet.
   */
  modal: PropTypes.bool,
};

export default withStyles(styleSheet)(BottomSheet);

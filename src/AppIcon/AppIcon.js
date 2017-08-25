// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { findDOMNode } from 'react-dom';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Popover from '../internal/Popover';
import Avatar from '../Avatar';
import Button from '../Button';
import grey from '../colors/grey';

export const styleSheet = createStyleSheet('MuiAppIcon', theme => ({
  root: {
    height: '44px',
    width: '44px',
    boxShadow: 'none',
    color: theme.palette.primary[500],
    background: grey[100],
  },
  popover: {
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
    display: 'flex',
  },
  avatar: {
    height: 44,
    width: 44,
  },
  actionList: {
    display: 'flex',
    flexDirection: 'column',
  },
  reversed: {
    flexDirection: 'column-reverse',
  },
  arrow: {
    position: 'relative',
    width: 0,
    height: 0,
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',
  },
  arrowUp: {
    borderBottom: '5px solid white',
    bottom: '-5px',
  },
  arrowDown: {
    borderTop: '5px solid white',
    top: '-5px',
  },
  arrowLeft: {
    marginLeft: 18,
  },
  arrowRight: {
    marginRight: 18,
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

class AppIcon extends Component {
  static defaultProps = {
    open: false,
    orientation: ['top', 'left'],
  };

  componentWillMount() {
    this.setState({
      open: this.props.open,
      anchorEl: undefined,
    });
  }

  actionList = undefined;

  handleFabClick = () => {
    this.setState({
      open: !this.state.open,
      anchorEl: findDOMNode(this.appButton),
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  getContentAnchorEl = () => {
    return findDOMNode(this.anchor);
  };

  render() {
    const { icon, orientation, children, classes } = this.props;

    const { open, anchorEl } = this.state;

    const transform = {
      vertical: orientation[0] === 'top' ? 32 : -28,
      horizontal: orientation[1] === 'left' ? 126 : 0,
    };

    const anchorArrow = (
      <div
        className={classNames({
          [classes.arrowLeft]: orientation[1] === 'right',
          [classes.arrowRight]: orientation[1] === 'left',
        })}
      >
        <div
          className={classNames({
            [classes.arrow]: true,
            [classes.arrowDown]: orientation[0] === 'top',
            [classes.arrowUp]: orientation[0] === 'bottom',
          })}
          ref={div => {
            this.anchor = div;
          }}
        />
      </div>
    );

    let buttonContent = icon;

    if (icon.type === Avatar) {
      buttonContent = React.cloneElement(icon, { className: classes.avatar });
    }

    const button = (
      <div>
        <Button fab className={classNames(classes.root)} onClick={this.handleFabClick}>
          {buttonContent}
        </Button>
      </div>
    );

    const content = (
      <div
        ref={node => {
          this.actionList = node;
        }}
        onClick={this.handleRequestClose}
      >
        {orientation[0] === 'bottom' ? anchorArrow : ''}
        <div
          className={classNames({
            [classes.actionList]: true,
            [classes.reversed]: orientation[0] === 'top',
          })}
        >
          {children}
        </div>
        {orientation[0] === 'top' ? anchorArrow : ''}
      </div>
    );

    return (
      <div
        ref={appButton => {
          this.appButton = appButton;
        }}
      >
        {button}
        <Popover
          anchorEl={anchorEl}
          getContentAnchorEl={this.getContentAnchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={transform}
          open={open}
          modal={false}
          className={classNames(classes.popover)}
          onRequestClose={this.handleRequestClose}
        >
          {content}
        </Popover>
      </div>
    );
  }
}

AppIcon.propTypes = {
  /**
   * Used to pass the App Actions for this component.
   */
  children: PropTypes.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: Object,
  /**
   * Icon to be placed within the App Icons root Fab Button.
   */
  icon: PropTypes.node.isRequired,
  /**
   * Determines whether or not the actions are visible.
   */
  open: PropTypes.bool,
  /**
   * Determines the direction in which to open the App Actions.
   */
  orientation: PropTypes.array,
};

export default withStyles(styleSheet)(AppIcon);

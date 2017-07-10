import React, {Component} from 'react';
import classNames from 'classnames';
import {createStyleSheet} from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Popover from '../internal/Popover';
import PropTypes from 'prop-types';
import Button from '../Button'
import { findDOMNode } from 'react-dom';

export const styleSheet = createStyleSheet('MuiAppIcon', theme => ({
  root: {
    height: '44px',
    width: '44px',
    boxShadow: 'none',
    color: theme.colorPrimary
  },
  actionList: {
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
    display: 'flex',
    flexDirection: 'column'
  },
  arrow:{
    position: 'relative',
    width: 0,
    height: 0,
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',

    //Test Styles
    marginLeft: 18,
    bottom: '-5px'
  },
  arrowUp: {
    borderBottom: '5px solid white'
  },
  arrowDown: {
    borderTop: '5px solid white'
  }
}));

class AppIcon extends Component{
    static defaultProps = {
      open: false,
      //orientation: ['bottom', 'left']
    };

    actionList = undefined;

    componentWillMount(){
      this.setState(
        {
          open: this.props.open,
          anchorEl: undefined
        }
      )
    }

    handleFabClick = (e) => {
      this.setState({
        open: !this.state.open,
        anchorEl: findDOMNode(this.refs.button)
      })
    };

    handleRequestClose = () => {
      this.setState({
        open: false
      })
    };

    getContentAnchorEl = () => {
      return findDOMNode(this.refs.anchor);
    };

    render(){
        let {
          icon,
          orientation,
          children,
          classes
        } = this.props;

        let {
          open,
          anchorEl
        } = this.state;

        let button =(
            <div>
              <Button fab={true} className={classNames(classes.root)} onClick={this.handleFabClick}>
                {icon}
              </Button>
            </div>
          );

        let content = (
          <div
            ref={node => {
              this.actionList = node;
            }}
          >
            <div className={classNames(classes.arrow, classes.arrowUp)} ref="anchor"></div>
            {children}
          </div>
        );

      //getContentAnchorEl={this.getContentAnchorEl}

      return(
          <div ref="button">
            {button}
            <Popover
              anchorEl={anchorEl}
              getContentAnchorEl={this.getContentAnchorEl}
              anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
              open={open}
              modal={false}
              className={classNames(classes.actionList)}
              onRequestClose={this.handleRequestClose}
            >
              {content}
            </Popover>
          </div>
        )
    }
}

AppIcon.propTypes = {
  /**
   * Used to pass the App Actions for this component.
   */
  children: PropTypes.node,
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
  orientation: PropTypes.array
}

export default withStyles(styleSheet)(AppIcon);

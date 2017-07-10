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
    flexDirection: 'column-reverse'
  },
  arrow:{
    position: 'relative',
    width: 0,
    height: 0,
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',
  },
  arrowUp: {
    borderBottom: '5px solid white',
    bottom: '-5px'
  },
  arrowDown: {
    borderTop: '5px solid white',
    top: '-5px'
  },
  arrowLeft: {
    marginLeft: 18
  },
  arrowRight: {
    marginRight: 18,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

class AppIcon extends Component{
    static defaultProps = {
      open: false,
      orientation: ['top', 'left']
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

        let transform = {
          vertical: orientation[0] == 'top'? 30: -30,
          horizontal: orientation[1] == 'left'? 126: 0
        };

        let anchorArrow = (
          <div className={
            classNames({
              [classes.arrowLeft] : orientation[1] == 'right',
              [classes.arrowRight] : orientation[1] == 'left',
            })
          }>
            <div className={classNames({
            [classes.arrow] : true,
            [classes.arrowDown] : orientation[0] == 'top',
            [classes.arrowUp] : orientation[0] == 'bottom',
          })}
          ref="anchor"></div>
          </div>
        )

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
            {orientation[0] == 'bottom'? anchorArrow : ''}
            {children}
            {orientation[0] == 'top'? anchorArrow : ''}
          </div>
        );

      return(
          <div ref="button">
            {button}
            <Popover
              anchorEl={anchorEl}
              getContentAnchorEl={this.getContentAnchorEl}
              anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
              transformOrigin={transform}
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

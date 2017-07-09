import React, {Component} from 'react';
import classNames from 'classnames';
import {createStyleSheet} from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Popover from '../internal/Popover';
import PropTypes from 'prop-types';
import Button from '../Button'
//import MenuList from './MenuList';

export const styleSheet = createStyleSheet('MuiAppIcon', {
  root: {
    height: '44px',
    width: '44px',
  },
  icon: {
    width: '24x' //TODO: Adjust Padding
  }
});

class AppIcon extends Component{
    static defaultProps = {
      open: false,
      orientation: ['top', 'left']
    };

    componentWillMount(){
      this.setState(
        {
          open: this.props.open,
          anchorEl: undefined
        }
      )
    }

    handleFabClick = (e) => {
      this.setState(
        {
          open: !this.state.open,
          anchorEl: e.currentTarget
        }
      )
    };

    render(){
        let {
          icon,
          orientation,
          classes
        } = this.props;

        let {
          open,
          anchorEl
        } = this.state;

        let buttonContent = React.cloneElement(icon, {className: classNames(classes.icon)});
        let button =(
            <div>
              <Button fab={true} className={classNames(classes.root)} onClick={this.handleFabClick}>
                {buttonContent}
              </Button>
            </div>
          );

        return(
          <div>
            {button}
            <Popover
              anchorEl={anchorEl}
              anchorOrigin={{vertical: orientation[0], horizontal: orientation[1]}}
              open={open}
              modal={false}
            >
              {
                'Hello List'
              }
            </Popover>
          </div>
        )
    }
}

AppIcon.propTypes = {
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
  //orientation: PropTypes.oneOf([['top', 'right'], ['top', 'left'], ['bottom', 'right'], ['bottom', 'left']])
  orientation: PropTypes.array
}

export default withStyles(styleSheet)(AppIcon);

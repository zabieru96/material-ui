import React, {Component} from 'react';
import classNames from 'classnames';
import {createStyleSheet} from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Popover from '../internal/Popover';
//import MenuList from './MenuList';

export const styleSheet = createStyleSheet('MuiAppIcon', {
  root: {

  },
});

class AppIcon extends Component{

    render(){
        //root prop to host the elements
        return(
           <div>
              {
                //Popover
               //MenuList styled a certain way
               "Hey"
              }
           </div>
        )
    }
}

AppIcon.propTypes = {

}

export default withStyles(styleSheet)(AppIcon);

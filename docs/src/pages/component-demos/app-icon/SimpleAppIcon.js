/**
 * Created by zabieru on 7/9/2017.
 */

import React, { Component } from 'react';
import AppIcon from 'material-ui/AppIcon';
import BookmarkIcon from 'material-ui-icons/Bookmark'

class SimpleAppIcon extends Component{
  render(){
    return (
      <AppIcon icon={ <BookmarkIcon/> }/>
    )
  }
}

export default SimpleAppIcon;

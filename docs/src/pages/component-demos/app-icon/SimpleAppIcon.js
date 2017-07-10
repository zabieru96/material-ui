/**
 * Created by zabieru on 7/9/2017.
 */

import React, { Component } from 'react';
import AppIcon, {AppAction} from 'material-ui/AppIcon';
import BookmarkIcon from 'material-ui-icons/Bookmark'
import BookIcon from 'material-ui-icons/Book'

class SimpleAppIcon extends Component{
  render(){
    return (
      <AppIcon icon={ <BookmarkIcon/> }>
        <AppAction icon={<BookIcon/>} label="Action 1"/>
        <AppAction icon={<BookIcon/>} label="Action 2"/>
        <AppAction icon={<BookIcon/>} label="Action 3"/>
        <AppAction icon={<BookIcon/>} label="Action 4"/>
      </AppIcon>
    )
  }
}

export default SimpleAppIcon;

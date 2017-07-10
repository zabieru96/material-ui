/**
 * Created by zabieru on 7/9/2017.
 */

import React, { Component } from 'react';
import AppIcon, {AppAction} from 'material-ui/AppIcon';
import BookmarkIcon from 'material-ui-icons/Bookmark'
import BookIcon from 'material-ui-icons/Book'

class SimpleAppIcon extends Component{

  action1 = () => {
    alert('Action 1 clicked!');
  };

  action2 = () => {
    alert('Action 2 clicked!');
  };

  action3 = () => {
    alert('Action 3 clicked!');
  };

  action4 = () => {
    alert('Action 4 clicked!');
  };

  render(){
    return (
      <AppIcon icon={ <BookmarkIcon/> }>
        <AppAction icon={<BookIcon/>} label="Action 1" onClick={this.action1}/>
        <AppAction icon={<BookIcon/>} label="Action 2" onClick={this.action2}/>
        <AppAction icon={<BookIcon/>} label="Action 3" onClick={this.action3}/>
        <AppAction icon={<BookIcon/>} label="Action 4" onClick={this.action4}/>
      </AppIcon>
    )
  }
}

export default SimpleAppIcon;

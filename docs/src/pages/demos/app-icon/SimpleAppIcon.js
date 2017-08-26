// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppIcon, { AppAction, AvatarGroup } from 'material-ui/AppIcon';
import BookmarkIcon from 'material-ui-icons/Bookmark';
import BookIcon from 'material-ui-icons/Book';
import MessageIcon from 'material-ui-icons/Message';
import CallIcon from 'material-ui-icons/Call';
import VideoCallIcon from 'material-ui-icons/VideoCall';
import StarIcon from 'material-ui-icons/Stars';
import Avatar from 'material-ui/Avatar';
import remyImage from 'docs/src/assets/images/remy.jpg';
import uxecoImage from 'docs/src/assets/images/uxceo-128.jpg';
import paella from 'docs/src/assets/images/paella.jpg';
import reptile from 'docs/src/assets/images/contemplative-reptile.jpg';

const styleSheet = createStyleSheet('ImageAvatars', {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    marginLeft: 10,
  },
});

class SimpleAppIcon extends Component {
  handleAction1 = () => {
    alert('Action 1 clicked!');
  };

  handleAction2 = () => {
    alert('Action 2 clicked!');
  };

  handleAction3 = () => {
    alert('Action 3 clicked!');
  };

  handleAction4 = () => {
    alert('Action 4 clicked!');
  };

  render() {
    const classes = this.props.classes;

    const avatar = <Avatar alt="Remy Sharp" src={remyImage} />;

    const avatarGroup = (
      <AvatarGroup>
        {avatar}
        <Avatar alt="Remy Sharp" src={uxecoImage} />
        <Avatar alt="Remy Sharp" src={paella} />
        <Avatar alt="Remy Sharp" src={reptile} />
      </AvatarGroup>
    );

    return (
      <div className={classes.row}>
        <AppIcon icon={<BookmarkIcon />}>
          <AppAction icon={<BookIcon />} label="Google" href="https://www.google.com" />
          <AppAction icon={<BookIcon />} label="FaceBook" href="https://www.facebook.com" />
          <AppAction icon={<BookIcon />} label="YouTube" href="https://www.youtube.com" />
          <AppAction icon={<BookIcon />} label="Tumblr" href="https://www.tumblr.com" />
        </AppIcon>

        <div className={classes.avatar}>
          <AppIcon icon={avatar}>
            <AppAction icon={<MessageIcon />} label="Message" onClick={this.handleAction1} />
            <AppAction icon={<CallIcon />} label="Call" onClick={this.handleAction2} />
            <AppAction icon={<VideoCallIcon />} label="Video Call" onClick={this.handleAction3} />
            <AppAction icon={<StarIcon />} label="Favorite" onClick={this.handleAction4} />
          </AppIcon>
        </div>

        <div className={classes.avatar}>
          <AppIcon icon={avatarGroup}>
            <AppAction icon={<MessageIcon />} label="Message" onClick={this.handleAction1} />
            <AppAction icon={<CallIcon />} label="Call" onClick={this.handleAction2} />
            <AppAction icon={<VideoCallIcon />} label="Video Call" onClick={this.handleAction3} />
            <AppAction icon={<StarIcon />} label="Favorite" onClick={this.handleAction4} />
          </AppIcon>
        </div>
      </div>
    );
  }
}

SimpleAppIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleAppIcon);

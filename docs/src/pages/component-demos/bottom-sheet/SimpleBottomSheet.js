/**
 * Created by zabieru on 6/27/2017.
 */
// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomSheet from 'material-ui/BottomSheet';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';

const styleSheet = createStyleSheet('SimpleBottomSheet', {
  root: {
    width: 500,
  },
});

class SimpleBottomSheet extends Component {

  state = {
    open: false,
  };

  openSheet = () => {
    this.setState({open: true});
  };


  render() {
    const classes = this.props.classes;

    const options = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Send mail" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </div>
    );

    return (
      <div className={classes.root}>
        <Button onClick={this.openSheet}>Open BottomSheet</Button>
        <BottomSheet
          open={this.state.open}
          heading="Hello Sheet"
        >
          {options}
        </BottomSheet>
      </div>
    );
  }
}

SimpleBottomSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SimpleBottomSheet);

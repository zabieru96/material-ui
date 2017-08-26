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

const styleSheet = createStyleSheet('InsetBottomSheet', {
  root: {
    width: 500,
  },
});

class InsetBottomSheet extends Component {

  state = {
    persistent: false,
    modal: false
  };

  togglePersistentSheet = () => {
    this.setState({persistent: !this.state.persistent});
  };

  toggleModalSheet = () => {
    this.setState({modal: !this.state.modal});
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
        <Button onClick={this.togglePersistentSheet}>Toggle Inset BottomSheet</Button>
        <BottomSheet
          open={this.state.persistent}
          inset
        >
          {options}
        </BottomSheet>

        <Button onClick={this.toggleModalSheet}>Toggle Basic Inset BottomSheet</Button>
        <BottomSheet
          open={this.state.modal}
          onRequestClose={this.toggleModalSheet}
          heading="Modal Sheet"
          modal
          inset
        >
          {options}
        </BottomSheet>
      </div>
    );
  }
}

InsetBottomSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(InsetBottomSheet);

// @flow

import React from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Avatar from '../Avatar/Avatar';

export const styleSheet = createStyleSheet('MuiAvatarGroup', {
  root: {
    height: 30,
  },
  avatar: {
    height: 15,
    width: 15,
    display: 'inline-block',
  },
});

type Props = {
  /**
   * Used to pass Avatars.
   */
  children: array,
  /**
   * Useful to extend the style applied to components.
   */
  classes: Object,
};

function AvatarGroup(props: Props) {
  const { classes } = props;

  const content = React.Children.map(props.children, child => {
    if (child.type === Avatar) {
      return React.cloneElement(child, {
        className: classNames(classes.avatar),
      });
    }
    return null;
  });

  return (
    <div className={classNames(classes.root)}>
      {content}
    </div>
  );
}

export default withStyles(styleSheet)(AvatarGroup);

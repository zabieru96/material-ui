/**
 * Created by zabieru on 7/11/2017.
 */
import React from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import Avatar from '../Avatar/Avatar'

export const styleSheet = createStyleSheet('MuiAvatarGroup', {
  root: {
    height: 30,
  },
  avatar4: {
    height: 15,
    width: 15,
    display: 'inline-block'
  }
});

//Check that there are atleast 2 children

type Props = {
  /**
   * Used to pass Avatars.
   */
  children: array
}

function AvatarGroup(props: Props) {
  const {children, classes} = props;

  const content = React.Children.map(props.children, child => {
    if (child.type === Avatar)
      return React.cloneElement(child, {
        className: classNames(classes.avatar4)
      })
  })

  return(
    <div>
      {content}
    </div>
  )

}

export default withStyles(styleSheet)(AvatarGroup);

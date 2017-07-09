/**
 * Created by zabieru on 7/9/2017.
 */
// @flow

import React from 'react';
import type { Element } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import ListItem from '../List/ListItem';

export const styleSheet = createStyleSheet('MuiAppAction', theme => ({
  root: {
    ...theme.typography.subheading,
    height: 48,
    boxSizing: 'border-box',
    background: 'white',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:focus': {
      background: theme.palette.text.divider,
    },
    '&:hover': {
      backgroundColor: theme.palette.text.divider,
    },
  },
}));

type DefaultProps = {
  role: string,
};

type Props = DefaultProps & {
  /**
   * App action contents.
   */
    children?: Element<*>,
  /**
   * Useful to extend the style applied to components.
   */
    classes: Object,
  /**
   * @ignore
   */
    className?: string,
  /**
   * Function called on click of action.
   */
    onClick?: Function,
  /**
   * @ignore
   */
    role?: string,
};

function AppAction(props: Props) {
  const { classes, className: classNameProp, component, role, ...other } = props;

  const className = classNames(
    classes.root,
    classNameProp,
  );

  return (
    <ListItem
      button
      role={role}
      tabIndex="-1"
      className={className}
      component={component}
      {...other}
    />
  );
}

AppAction.defaultProps = {
  role: 'appaction',
};

export default withStyles(styleSheet)(AppAction);

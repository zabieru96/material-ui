/**
 * Created by zabieru on 7/9/2017.
 */
// @flow

import React from 'react';
import type { Element } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';

export const styleSheet = createStyleSheet('MuiAppAction', theme => ({
  root: {
    height: 44,
    width: 170,
    borderRadius: 24,
    boxSizing: 'border-box',
    background: 'white',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    alignItems: 'center',
    display: 'flex',
    margin: '4px auto',
    boxShadow: theme.shadows[8],
  },
  icon: {
    background: 'blue',
    borderRadius: '50%',
    display: 'flex',
    float: 'left',
    height: 32,
    width: 32,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    display: 'flex',
    float: 'right',
    textAlign: 'center',
    marginLeft: 5
  }
}));

type DefaultProps = {
  role: string,
};

type Props = DefaultProps & {
  /**
   * Useful to extend the style applied to components.
   */
    classes: Object,
  /**
   * @ignore
   */
    className?: string,
  /**
   * Icon to display for the current action
   */
    icon: Element<*>,
  /**
   * Label to display for the current action
   */
    label: string,
  //maybe href? and callback
  /**
   * Function called on click of action.
   */
    onClick?: Function,
};

function AppAction(props: Props) {
  const { classes, icon, label, onClick } = props;

  return (
    <div onClick={onClick} className={classNames(classes.root)}>
      <span className={classNames(classes.icon)}>
        {icon}
      </span>
      <span className={classNames(classes.label)}>
        {label}
        </span>
    </div>
  );
}

AppAction.defaultProps = {
  role: 'appaction',
};

export default withStyles(styleSheet)(AppAction);

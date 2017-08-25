// @flow

import React from 'react';
import type { Element } from 'react';
import classNames from 'classnames';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from '../styles/withStyles';
import grey from '../colors/grey';

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
    margin: '2px auto',
    boxShadow: theme.shadows[3],
    cursor: 'pointer',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    border: 'none',
  },
  icon: {
    background: grey[300],
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
    marginLeft: 5,
  },
  link: {
    color: 'inherit',
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
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
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string,
  /**
   * Label to display for the current action
   */
  label: string,
  /**
   * Function called on click of action.
   */
  onClick?: Function,
};

function AppAction(props: Props) {
  const { classes, icon, label, onClick } = props;

  let content;

  if (props.href) {
    content = (
      <div onClick={onClick} className={classNames(classes.root)}>
        <a href={props.href} className={classNames(classes.link)}>
          <span className={classNames(classes.icon)}>
            {icon}
          </span>
          <span className={classNames(classes.label)}>
            {label}
          </span>
        </a>
      </div>
    );
  } else {
    content = (
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

  return content;
}

AppAction.defaultProps = {
  role: 'action',
};

export default withStyles(styleSheet)(AppAction);

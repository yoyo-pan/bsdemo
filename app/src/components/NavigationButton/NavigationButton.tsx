import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core';
import styles from './NavigationButton.styles';

interface INavigationButtonProps extends WithStyles {
  title: string;
}

class NavigationButton extends Component<INavigationButtonProps> {
  render() {
    const { title, classes } = this.props;

    return (
      <Button className={classes.btn} variant="contained">
        {title}
      </Button>
    );
  }
}

export default withStyles(styles)(NavigationButton);

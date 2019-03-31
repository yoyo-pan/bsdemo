import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles, Grid, withWidth } from '@material-ui/core';
import styles from './Header.styles';
import { headers } from '../../utils/fakeData';
import { WithWidth } from '@material-ui/core/withWidth';

interface IHeaderProps extends WithStyles, WithWidth {}

class Header extends Component<IHeaderProps> {
  render() {
    const { classes, width } = this.props;

    if (width === 'sm' || width === 'xs') {
      return null;
    }

    return (
      <Grid
        className={classes.header}
        container={true}
        alignContent="center"
        justify="center"
      >
        {headers.map(item => {
          return <div className={classes.item}>{item}</div>;
        })}
      </Grid>
    );
  }
}

export default withStyles(styles)(withWidth()(Header));

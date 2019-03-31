import React, { Component } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { BREAKPOINTS } from '../../utils/constants';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
  WithStyles
} from '@material-ui/core';
import styles from './App.styles';
import Header from '../../components/Header/Header';
import { CUSTOM_THEMES } from '../../utils/theme';

const theme = createMuiTheme({
  breakpoints: { values: BREAKPOINTS },
  typography: {
    useNextVariants: true
  },
  ...CUSTOM_THEMES
});

interface IAppProps extends WithStyles {}

class App extends Component<IAppProps> {
  renderHeader() {
    return <Header />;
  }

  renderBody() {
    return <ArticleList />;
  }
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          {this.renderHeader()}
          {this.renderBody()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

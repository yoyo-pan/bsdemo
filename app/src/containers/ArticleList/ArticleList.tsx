import React, { Component } from 'react';
import { fakeNavigationButtons } from '../../utils/fakeData';
import NavigationButton from '../../components/NavigationButton/NavigationButton';
import { Grid, withWidth } from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import classes from '*.module.sass';

interface IArticleListProps extends WithWidth {}

class ArticleList extends Component<IArticleListProps> {
  rendernavigationButtons() {
    // xs: 2 + 1(more)
    // md: 5 + 4 + 1(more)
    // sm, lg, xl: 6 + 5 + 1(more)
    const { width } = this.props;

    let firstRowBtns: any[] = [];
    let secondRowBtns: any[] = [];
    const moreButton = {
      id: 'more',
      title: '更多'
    };

    switch (width) {
      case 'xs':
        firstRowBtns = fakeNavigationButtons.slice(0, 2);
        if (fakeNavigationButtons.length >= 3) {
          firstRowBtns.push(moreButton);
        }
        break;
      case 'md':
        firstRowBtns = fakeNavigationButtons.slice(0, 5);
        secondRowBtns = fakeNavigationButtons.slice(6, 10);
        if (fakeNavigationButtons.length >= 10) {
          secondRowBtns.push(moreButton);
        }
        break;
      case 'sm':
      case 'lg':
      case 'xl':
      default:
        firstRowBtns = fakeNavigationButtons.slice(0, 6);
        secondRowBtns = fakeNavigationButtons.slice(7, 12);
        if (fakeNavigationButtons.length >= 12) {
          secondRowBtns.push(moreButton);
        }
        break;
    }
    return (
      <React.Fragment>
        <Grid container={true} justify="space-around">
          {firstRowBtns.map(btn => (
            <NavigationButton key={btn.id} title={btn.title} />
          ))}
        </Grid>
        <Grid container={true} justify="space-around">
          {secondRowBtns.map(btn => (
            <NavigationButton key={btn.id} title={btn.title} />
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  render() {
    return <div>{this.rendernavigationButtons()}</div>;
  }
}

export default withWidth()(ArticleList);

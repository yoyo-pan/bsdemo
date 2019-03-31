import React, { Component } from 'react';
import { fakeNavigationButtons } from '../../utils/fakeData';
import NavigationButton from '../../components/NavigationButton/NavigationButton';

class ArticleList extends Component {
  rendernavigationButtons() {
    return fakeNavigationButtons.map(btn => {
      return <NavigationButton key={btn.id} title={btn.title} />;
    });
  }

  render() {
    return <div>{this.rendernavigationButtons()}</div>;
  }
}

export default ArticleList;

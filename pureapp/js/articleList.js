function initArticleList() {
  setTimeout(() => {
    appendNavigationButtons();
  }, 100);
}

function appendNavigationButtons() {
  let firstRowBtnString = '';
  let secondRowBtnString = '';
  let firstRowBtns = [];
  let secondRowBtns = [];
  const moreButton = {
    id: 'more',
    title: '更多'
  };

  // xs: 2 + 1(more)
  // md: 5 + 4 + 1(more)
  // sm, lg, xl: 6 + 5 + 1(more)
  if (window.matchMedia('(min-width: 1280px)').matches) {
    firstRowBtns = fakeNavigationButtons.slice(0, 6);
    secondRowBtns = fakeNavigationButtons.slice(7, 12);
    if (fakeNavigationButtons.length >= 12) {
      secondRowBtns.push(moreButton);
    }
  } else if (window.matchMedia('(min-width: 1024px)').matches) {
    firstRowBtns = fakeNavigationButtons.slice(0, 5);
    secondRowBtns = fakeNavigationButtons.slice(6, 10);
    if (fakeNavigationButtons.length >= 10) {
      secondRowBtns.push(moreButton);
    }
  } else if (window.matchMedia('(min-width: 768px)').matches) {
    firstRowBtns = fakeNavigationButtons.slice(0, 6);
    secondRowBtns = fakeNavigationButtons.slice(7, 12);
    if (fakeNavigationButtons.length >= 12) {
      secondRowBtns.push(moreButton);
    }
  } else {
    firstRowBtns = fakeNavigationButtons.slice(0, 2);
    if (fakeNavigationButtons.length >= 3) {
      firstRowBtns.push(moreButton);
    }
  }

  firstRowBtns.forEach(btn => {
    firstRowBtnString += `<button class="btn btn-light Navigation-btn">${
      btn.title
    }</button>`;
  });

  secondRowBtns.forEach(btn => {
    secondRowBtnString += `<button class="btn btn-light Navigation-btn">${
      btn.title
    }</button>`;
  });

  $('#First-row').replaceWith(
    `<div id="First-row" class="row justify-content-around">${firstRowBtnString}</div>`
  );

  $('#Second-row').replaceWith(
    `<div id="Second-row" class="row justify-content-around">${secondRowBtnString}</div>`
  );
}

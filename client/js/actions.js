var createGroupPage = require('./components/formAGroup');
/*
 * action types
 */

const PAGE_TRANSITION = 'PAGE_TRANSITION';

const Pages = {
  HOME_PAGE: 'HOME_PAGE',
  CREATE_GROUP: createGroupPage
};

/*
 * action creators
 */

function pageTransition(nextPage) {
  return { type: PAGE_TRANSITION, page: nextPage}
}

module.exports = {
  PAGE_TRANSITION: PAGE_TRANSITION,
  Pages: Pages,
  pageTransition: pageTransition
};
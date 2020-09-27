/*
 *
 * LandingPage reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';

export const initialState = { totalSong: 0, results: [] };

export const { Types: landingPageType, Creators: landingPageActions } = createActions({
  requestSearchResult: ['searchQuery'],
  storeSearchResults: ['data']
});

/* eslint-disable default-case, no-param-reassign */
const landingPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case landingPageType.STORE_SEARCH_RESULTS:
        draft.totalSong = action.data.resultCount;
        draft.results = action.data.results;
        break;
    }
  });

export default landingPageReducer;

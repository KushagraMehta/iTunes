import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';
/**
 * Direct selector to the landingPage state domain
 */

const selectLandingPageDomain = state => state.landingPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LandingPage
 */

const getSongForLandingPage = () =>
  createSelector(
    selectLandingPageDomain,
    substate => get(substate, 'results', [])
  );

export default getSongForLandingPage;

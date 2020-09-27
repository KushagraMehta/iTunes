import { call, put, takeLatest } from 'redux-saga/effects';
import ituneAPI from '@utils/apiUtils';
import { landingPageType, landingPageActions } from './reducer';

// worker Saga
function* getApiData(action) {
  const data = yield call(ituneAPI.getSearchResult, action.searchQuery);
  if (data) yield put(landingPageActions.storeSearchResults(data));
}

// Individual exports for testing
export default function* landingPageSaga() {
  yield takeLatest(landingPageType.REQUEST_SEARCH_RESULT, getApiData);
}

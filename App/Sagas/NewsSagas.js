import { call, put } from 'redux-saga/effects';
import NewsActions from '../Redux/NewsRedux';

export function* getNews(api, action) {

  /* ----- make the call to the api  ----- */
  const response = yield call(api.getNews);

  if(response?.ok && response?.status == 200) {
    yield put(NewsActions.success(response?.data));
  } else {
    yield put(NewsActions.failure());
  }
}

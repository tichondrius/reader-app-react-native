import { all } from 'redux-saga/effects';
import fetchCategories from './fetchFlow/fetchFlow'
const rootSaga = function * root () {
  yield all([
    fetchCategories(),
  ]);
}
export default rootSaga;
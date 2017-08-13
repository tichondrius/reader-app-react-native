import { all } from 'redux-saga/effects';
import fetchFlow from './fetchFlow/fetchFlow';


const rootSaga = function * root () {
  yield all ([
    fetchFlow(),
  ]);
}
export default rootSaga
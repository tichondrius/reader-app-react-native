
import { REHYDRATE } from 'redux-persist/constants';
import { fork, call, take, put, all, select } from 'redux-saga/effects';
import { fetchStories } from '../../../services-api/services';
import * as allstoriesContanst from '../../modules/data/allstories';
import * as comicstoriesContanst from '../../modules/data/comicstories';
import * as readstoriesContant from '../../modules/data/readstories';



const processDataFetch = function* (response, FETCH_DONE, FETCH_FAILE){

  const { error, data } = response;
  if (!error) {
    yield put({ type: FETCH_DONE, stories: data });
  }
  else yield put({ type: FETCH_FAILE, error }); 
}



const fetchStory =  function* () {
  try {
    yield all([
      put({ type: allstoriesContanst.FETCHING_ALL_STORIES }),
      put({ type: comicstoriesContanst.FETCHING_COMIC_STORIES }),
      put({ type: readstoriesContant.FETCHING_READ_STORIES}),
    ])
    const [allstories, comicstories, readstories] = yield all([
      call(fetchStories, 'all'),
      call(fetchStories, 'comic'),
      call(fetchStories, 'read'),
    ]);

    yield all([
      processDataFetch(
        allstories,
        allstoriesContanst.FETCH_ALL_STORIES_DONE,
        allstoriesContanst.FETCH_ALL_STORIES_FAILE),
      processDataFetch(
        comicstories,
        comicstoriesContanst.FETCH_COMIC_STORIES_DONE,
        allstoriesContanst.FETCH_ALL_STORIES_FAILE),
      processDataFetch(
        readstories,
        allstoriesContanst.FETCH_ALL_STORIES_DONE,
        allstoriesContanst.FETCH_ALL_STORIES_FAILE),
    ])

  } catch (error) {
    yield all([
      put({ type: allstoriesContanst.FETCH_ALL_STORIES_FAILE, error }),
      put({ type: comicstoriesContanst.FETCH_COMIC_STORIES_FAILE, error }),
      put({ type: readstoriesContant.FETCH_READ_STORIES_FAILE, error }), 
    ]);
  }
}





const fetchFlow = function* () {
  yield take(REHYDRATE);
  yield all([
    fetchStory(),
  ]);
}

export default fetchFlow;
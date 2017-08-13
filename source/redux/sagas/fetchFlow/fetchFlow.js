import { REHYDRATE } from 'redux-persist/constants';
import { fork, call, take, put, all, select } from 'redux-saga/effects';
import { fetchStories } from '../../../services-api/services';
import * as allstoriesContanst from '../../modules/data/allstories';
import * as comicstoriesContanst from '../../modules/data/comicstories';
import * as readstoriesContant from '../../modules/data/readstories';


export function* fetchStory() {
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
      put({ type: allstoriesContanst.FETCH_ALL_STORIES_DONE, stories: allstories }),
      put({ type: comicstoriesContanst.FETCH_COMIC_STORIES_DONE, stories: comicstories }),
      put({ type: readstoriesContant.FETCH_MORE_READ_STORIES_DONE, stories: readstories }), 
    ]);

  } catch (error) {
    yield all([
      put({ type: allstoriesContanst.FETCH_ALL_STORIES_FAILE, error }),
      put({ type: comicstoriesContanst.FETCH_COMIC_STORIES_FAILE, error }),
      put({ type: readstoriesContant.FETCH_READ_STORIES_FAILE, error }), 
    ]);
  }
}


export function* fetchCategories() {
  
}





export default function* watchConfig() {
  yield take(REHYDRATE);
  yield all([
    fetchStory(),
    fetchCategories(),
  ]);
}
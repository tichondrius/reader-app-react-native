import { combineReducers } from 'redux';
import allstories from './allstories';
import comicstories from './comicstories';
import readstories  from './readstories';

export default combineReducers({
  allstories,
  comicstories,
  readstories,
});
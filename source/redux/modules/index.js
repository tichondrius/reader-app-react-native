import { combineReducers } from 'redux';
import drawer from './drawer';
import ui from './ui';
import nav from './nav';
import data from './data';
import search from './search';


const rootReducer = combineReducers({
  drawer,
  ui,
  nav,
  data,
  search,
});

export default rootReducer;
export const FETCHING_ALL_STORIES = 'data/allstories/FETCHING';
export const FETCH_ALL_STORIES_FAILE = 'data/allstories/FETCH_FAILE';
export const FETCH_ALL_STORIES_DONE = 'data/allstories/FETCH_DONE';
export const FETCHING_MORE_ALL_STORIES = 'data/allstories/FETCHING_MORE';
export const FETCH_MORE_ALL_STORIES_DONE = 'data/allstories/FETCH_MORE'

const initialState = {
  stories: [],
  isFetching: false,
  error: undefined,
}

export default function allstories(state = initialState, action) {
  switch(action.type) {
    case FETCHING_ALL_STORIES:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };
    case FETCH_ALL_STORIES_FAILE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCH_ALL_STORIES_DONE:
      return {
        ...state,
        isFetching: false,
        stories: action.stories
      };
    case FETCHING_MORE_ALL_STORIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_MORE_ALL_STORIES_DONE:
      return {
        ...state,
        stories: [
          ...state.stories,
          action.stories
        ]
      };
    default: return state;
  }
}
export const FETCHING_READ_STORIES = 'data/readstories/FETCHING';
export const FETCH_READ_STORIES_FAILE = 'data/readstories/FETCH_FAILE';
export const FETCH_READ_STORIES_DONE = 'data/readstories/FETCH_DONE';
export const FETCHING_MORE_READ_STORIES = 'data/readstories/FETCHING_MORE';
export const FETCH_MORE_READ_STORIES_DONE = 'data/readstories/FETCH_MORE'

const initialState = {
  stories: [],
  isFetching: false,
  error: undefined,
}

export default function readstories(state = initialState, action) {
  switch(action.type) {
    case FETCHING_READ_STORIES:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };
    case FETCH_READ_STORIES_FAILE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCH_READ_STORIES_DONE:
      return {
        ...state,
        isFetching: false,
        stories: action.stories
      };
    case FETCHING_MORE_READ_STORIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_MORE_READ_STORIES_DONE:
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
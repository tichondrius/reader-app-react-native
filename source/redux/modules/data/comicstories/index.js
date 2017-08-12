export const FETCHING_COMIC_STORIES = 'data/comicstories/FETCHING';
export const FETCH_COMIC_STORIES_FAILE = 'data/comicstories/FETCH_FAILE';
export const FETCH_COMIC_STORIES_DONE = 'data/comicstories/FETCH_DONE';
export const FETCHING_MORE_COMIC_STORIES = 'data/comicstories/FETCHING_MORE';
export const FETCH_MORE_COMIC_STORIES_DONE = 'data/comicstories/FETCH_MORE'

const initialState = {
  stories: [],
  isFetching: false,
  error: undefined,
}

export default function comicstories(state = initialState, action) {
  switch(action.type) {
    case FETCHING_COMIC_STORIES:
      return {
        ...state,
        isFetching: true,
        error: undefined,
      };
    case FETCH_COMIC_STORIES_FAILE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case FETCH_COMIC_STORIES_DONE:
      return {
        ...state,
        isFetching: false,
        stories: action.stories
      };
    case FETCHING_MORE_COMIC_STORIES:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_MORE_COMIC_STORIES_DONE:
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
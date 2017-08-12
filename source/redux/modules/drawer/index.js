export const COLLAPSE_STORIES_TYPE = 'drawer/COLLAPSE_STORIES_TYPE';
export const COLLAPSE_CATEGORIES = 'drawer/COLLAPSE_CATEGORIES';
export const FLUSH_DRAWER = 'drawer/FLUSH_DRAWER';

const initialState = {
  isStoriesTypeExpande: true,
  isCategoriesExpande:false,
}

export default function drawer(state = initialState, action) {
  switch (action.type) {
    case COLLAPSE_CATEGORIES:
      return {
        ...state,
        isCategoriesExpande: !state.isCategoriesExpande
      };
      break;
    case COLLAPSE_STORIES_TYPE:
      return {
        ...state,
        isStoriesTypeExpande: !state.isStoriesTypeExpande
      };
    case FLUSH_DRAWER:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
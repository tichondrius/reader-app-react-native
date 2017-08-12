export const CHANGE_NETWORK_STATUS  = 'ui/CHANGE_NETWORK_STATUS';

const initialState = {
  status: 'offline',
};

export default function ui(state = initialState, action) {
  switch(action.type) {
    case CHANGE_NETWORK_STATUS:
     return {
       ...state,
       status: action.status,
     };
    default: return state;
  }
}
import { MainNavigator } from '../../../scenes';

const initialNavState = MainNavigator.router.getStateForAction(MainNavigator.router.getActionForPathAndParams('Home'));

const nav = (state = initialNavState, action) => {
  const nextState = MainNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default nav;
import { combineReducers } from 'redux';
import { nav } from '../Navigators.js';


function subs(state = {}, action) {
  switch (action.type) {
    case 'SET_SUBS':
      return {...state, subs: action.subs};
    default:
      return state;
  }
}

export default appReducer = combineReducers({
  nav,
  subs
});

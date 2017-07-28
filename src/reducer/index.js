import { combineReducers } from 'redux';
import { nav } from '../Navigators.js';

function userSettings(state = {}, action) {

}

function subs(state = {}, action) {
  switch (action.type) {
    case 'SET_SUBS':
      return {...state, list: action.subs};
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case 'SIGN_UP':
      return {...state, userId: action.userId};
    default:
      return state;
  }
}

function posts(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {...state, list: [{title: 'Loading...'}]};
    case 'FETCH_POSTS_SUCCESS':
      return {...state, list: action.posts};
    case 'FETCH_POSTS_FAILURE':
      console.log(action.err);
    case 'SELECT_POST':
      console.log('THISISINTHEREDUCERPOSTID' + action.id);
    default:
      return state;
  }
}
// function toggleSwitch(state ={}, action) {
//   switch (action.type) {
//     case 'SWITCH_ON':
//       return {...state, toggleSwitch: true};
//     case 'SWITCH_OFF':
//       return {...state, toggleSwitch: false};
//     case 'TOGGLE':
//       return {..state, toggleSwitch: !state.toggleSwitch};
//     default:
//       return state;
//   }
// }

// function subs(state = {}, action) {
//   switch (action.type) {
//     case 'SET_COMMENTS':
//       return {...state, subs: action.subs};
//     default:
//       return state;
//   }
// }

// store.dispatch({type:'SET_SUBS', subs: ['local', 'main']});
// store.getState().subs /// === ['local, main']

export default appReducer = combineReducers({
  nav,
  subs,
  posts,
});

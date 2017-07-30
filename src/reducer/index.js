import { combineReducers } from 'redux';
import { nav, initialNavState } from '../Navigators.js';

function userPost(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_POST_TITLE':
      return {...state, title: action.title};
    case 'UPDATE_POST_TEXT':
      return {...state, text: action.text};
    case 'SUBMITTING_POST':
      return state;
    case 'SUBMITTED_POST':
      return state;
    case 'SUBMISSION_FAILED':
      console.log(action.err);
    default:
      return state;
  }
}

function user(state = {currentSub: 6}, action) {
  switch (action.type) {
    case 'AUTHORIZE':
      return {...state, userId: action.userId};
    case 'SELECT_SUB':
      console.log('itemValue', action.itemValue);
      return {...state, currentSub: action.itemValue};
    case 'FETCH_USER_DATA_REQUEST':
      console.log('fetching user data');
      return {...state};
    case 'FETCH_USER_DATA_SUCCESS':
      return {...state, userData: action.userData};
    case 'FETCH_USER_DATA_FAILURE':
      console.log(action.err);
    default:
      return state;
  }
}


<<<<<<< HEAD
function posts(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return {...state, postList: [{title: 'Loading...'}]};
    case 'FETCH_POSTS_SUCCESS':
      return {...state, postList: action.posts};
    case 'FETCH_POSTS_FAILURE':
      console.log(action.err);
    case 'SELECT_POST':
      return {...state, currentPost: action.post}
=======

function settings(state = {
    userSettingsUpvoteThreshold: 0,
    userSettingsDistanceThreshold: 0,
    userSettingsNotifThreshold: 0,
    adminSettingsUpvoteThreshold: 0,
    adminSettingsDistanceThreshold: 0,
    adminSettingsNotifThreshold: 0 
  }, action) {
  switch (action.type) {
    case 'USER_SETTINGS_UPVOTE_THRESHOLD':
      return {...state, userSettingsUpvoteThreshold: action.userSettingsUpvoteThreshold};
    case 'USER_SETTINGS_DISTANCE_THRESHOLD':
      return {...state, userSettingsDistanceThreshold: action.userSettingsDistanceThreshold};
    case 'USER_SETTINGS_NOTIFICATION_THRESHOLD':
      return {...state, userSettingsNotifThreshold: action.userSettingsNotifThreshold};

    case 'ADMIN_SETTINGS_UPVOTE_THRESHOLD':
      return {...state, adminSettingsUpvoteThreshold: action.adminSettingsUpvoteThreshold};
    case 'ADMIN_SETTINGS_DISTANCE_THRESHOLD':
      return {...state, adminSettingsDistanceThreshold: action.adminSettingsDistanceThreshold};
    case 'ADMIN_SETTINGS_NOTIFICATION_THRESHOLD':
      return {...state, adminSettingsNotifThreshold: action.adminSettingsNotifThreshold};
>>>>>>> redux imp for settings(admin and normal):  made userSettings and adminSettings dumb
    default:
      return state;
  }
}
<<<<<<< HEAD
=======


>>>>>>> redux imp for settings(admin and normal):  made userSettings and adminSettings dumb
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

const appReducer = combineReducers({
  user,
  nav,
  posts,
  userPost,
  settings
});

const initialState = {
  nav: initialNavState,
  user: null,
  posts: null,
  userPost: null,
  settings: {},
};

export { appReducer, initialState };

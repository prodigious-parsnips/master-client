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

function userMap(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_MAP_TITLE':
      return {...state, title: action.title};
    case 'UPDATE_MAP_DESCRIPTION':
      return {...state, description: action.description};
    case 'UPDATE_UPVOTE_THRESHOLD':
      return {...state, upvoteThreshold: action.value};
    case 'UPDATE_DISTANCE_THRESHOLD':
      return {...state, distanceThreshold: action.value};
    case 'SUBMITTING_MAP':
      console.log('submitting map');
      return state;
    case 'SUBMITTED_MAP':
      console.log('map submitted');
      return state;
    case 'MAP_SUBMISSION_FAILED':
      console.log(action.err);
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case 'AUTHORIZE':
      return {...state, userId: action.userId};
    case 'SELECT_SUB':
      console.log('itemValue', action.itemValue);
      return {...state, currentSub: action.itemValue};
    case 'FETCH_USER_DATA_REQUEST':
      console.log('fetching user data');
      return state;
    case 'FETCH_USER_DATA_SUCCESS':
      return {...state, userData: action.userData};
    case 'FETCH_USER_DATA_FAILURE':
      console.log(action.err);
    default:
      return state;
  }
}

function currentUserPreference(state = {}, action) {
  switch(action.type) {
    case 'USER_PREFERENCE_UPDATE':
      return {...state, currentUserPreference: action.currentUserPreference}
    default:
      return state;
  }
}

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
    default:
      return state;
  }
}

function settings(state = {
    userSettingsUpvoteThreshold: 0,
    userSettingsDistanceThreshold: 0,
    userSettingsNotifThreshold: 0,
    adminSettingsUpvoteThreshold: 0,
    adminSettingsDistanceThreshold: 0,
    adminSettingsNotifThreshold: 0,
    adminSettingsTitle: '',
    adminSettingsDescription: ''
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
    case 'ADMIN_SETTINGS_TITLE':
      return {...state, adminSettingsTitle: action.adminSettingsTitle};
    case 'ADMIN_SETTINGS_DESCRIPTION':
      return {...state, adminSettingsDescription: action.adminSettingsDescription};
      default:
        return state;
    }
  }

function comments(state = {}, action) {
  switch (action.type) {
    case 'FETCH_COMMENTS_REQUEST':
      console.log('fetching comments');
    case 'FETCH_COMMENTS_SUCCESS':
      return {...state, commentList: action.commentList}
    case 'FETCH_COMMENTS_FAILURE':
      console.log(action.err);
      return state;
    case 'SUBMITTING_COMMENT':
      console.log('submitting comment');
      return state;
    case 'SUBMITTED_COMMENT':
      console.log('comment submitted')
      return state;
    case 'COMMENT_SUBMISSION_FAILED':
      console.log(action.err);
      return state;
    case 'UPDATE_COMMENT':
      return {...state, userComment: action.text};

    default:
      return state;
  }
}

const appReducer = combineReducers({
  user,
  nav,
  posts,
  userPost,
  settings,
  currentUserPreference,
  userMap,
  comments,
});

const initialState = {
  nav: initialNavState,
  user: null,
  posts: null,
  userPost: null,
  settings: {},
  currentUserPreference: null,
  userMap: null,
  comments: null,
};

export { appReducer, initialState };

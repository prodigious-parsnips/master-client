import React from 'react';
import { View } from 'react-native'
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import TestScreen from './components/TestScreen.js';
import { AppNavigator } from './Navigators.js';
import { appReducer, initialState } from './reducer';
import PushNotification from 'react-native-push-notification';

const TEMP_USER_ID = 2;

class App extends React.Component {

  componentDidMount() {
    this.fetchUserData().then(() => {
     var userPreference = this.getUserPreferenceforSubreddit(this.props.currentSubreddit, this.props.allUserData);
     console.log('userPreference', userPreference);
     this.props.userSettingsUpvoteThreshold(userPreference.upvote_threshold);
     this.props.userSettingsDistanceThreshold(userPreference.location_threshold);
     this.props.userSettingsNotifThreshold(userPreference.notification_limit);
    })

    this.getPermissionForNotifications();
    navigator.geolocation.requestAuthorization();
    this.testPush();

  }

  getUserPreferenceforSubreddit (currentSubreddit, userObject) {
      //make a variable for the user preference id
      console.log("currentSubreddit", currentSubreddit, "userObject",  userObject)
      var userPreferenceId;
      var usersSubredditsPrefs = userObject.userData.users_subreddits_prefs;
      console.log('usersSubredditsPrefs', usersSubredditsPrefs );
      var userPreferences = userObject.userData.user_preferences;
      console.log('userPreferences ', userPreferences);

      //go through the user subreddit prefs array
      for(var i = 0; i < usersSubredditsPrefs.length; i++){
       //if the subreddit matches the currentSubreddit
       if(usersSubredditsPrefs[i].subreddit_id === currentSubreddit){
       //make the variable for user preference id equal to the number
         userPreferenceId = usersSubredditsPrefs[i].user_preference_id;
         break;
       }
      }
      //go through the user preferences array
      for(var i = 0; i < userPreferences.length; i++){
        if(userPreferences[i].id === userPreferenceId){
          //if the id of the item is equal to the user preference id variable
          //return the item
          return userPreferences[i];
        }
      }
  }

  fetchUserData() {
    return new Promise((resolve, reject) => {
      store.dispatch({type: 'FETCH_USER_DATA_REQUEST'});
      fetch(`http://localhost:3000/api/user?id=${TEMP_USER_ID}`)
      .then(res => res.json())
      .then(data => {
        console.log('\nTHIS IS FETCHED USERDATA\n'+ JSON.stringify(data, null, 2));
        store.dispatch({type: 'FETCH_USER_DATA_SUCCESS', userData: data});
        //call function
      }).then(() => {
        resolve();
      })
      .catch(err => store.dispatch({type: 'FETCH_USER_DATA_FAILURE'}));
    });
  }

  getPermissionForNotifications(){
    PushNotification.configure({
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );
      },
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
          alert: true,
          badge: true,
          sound: true
      },
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      requestPermissions: true,
    });
  }

  testPush() {
    PushNotification.localNotificationSchedule({
      message: "HereNow Notification Message", // (required)
      number: 1,
      date: new Date(Date.now() + (10 * 1000)) // in 3 secs
    });
  }

  render() {
    return (
        <AppNavigator />
      );
  }
}

// const mapStateToProps = (state) => ({
//   nav: state.nav,
//   currentSubreddit: state.user.currentSub,
//   user: state.user
//   // currentUserPreference: state.user
// });

// const mapDispatchToProps = (dispatch) => ({
//   updateCurrentUserPreference: (userPreferenceObject) => {
//   // console.log('UPVOTE VAL', val)
//     const action = {
//       type: "USER_PREFERENCE_UPDATE",
//       currentUserPreference: userPreferenceObject
//     }
//     dispatch(action)
//   },
// })
const mapStateToProps = (state) => {
  return ({
    nav: state.nav,
    currentSubreddit: state.user.currentSub,
    allUserData: state.user,
    userSettingsUpvoteThresholdValue: state.settings.userSettingsUpvoteThreshold,
    userSettingsDistanceThresholdValue: state.settings.userSettingsDistanceThreshold,
    userSettingsNotifThresholdValue: state.settings.userSettingsNotifThreshold,
    adminSettingsUpvoteThresholdValue: state.settings.adminSettingsUpvoteThreshold,
    adminSettingsDistanceThresholdValue: state.settings.adminSettingsDistanceThreshold,
    adminSettingsNotifThresholdValue: state.settings.adminSettingsNotifThreshold,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    userSettingsUpvoteThreshold: (val = 0) => {
      console.log('UPVOTE VAL', val)
      const action = {
        type: "USER_SETTINGS_UPVOTE_THRESHOLD",
        userSettingsUpvoteThreshold: val
      }
      dispatch(action)
    },
    userSettingsDistanceThreshold: (val = 0) => {
      console.log('DISTANCE VAL', val)

      const action = {
        type: "USER_SETTINGS_DISTANCE_THRESHOLD",
        userSettingsDistanceThreshold: val
      }
      dispatch(action)
    },
    userSettingsNotifThreshold: (val = 0) => {
      console.log('NOTIF THRESHOLD', val);
      const action = {
        type: "USER_SETTINGS_NOTIFICATION_THRESHOLD",
        userSettingsNotifThreshold: val
      }
      dispatch(action)
    },

    adminSettingsUpvoteThreshold: (val = 0) => {
      const action = {
        type: "ADMIN_SETTINGS_UPVOTE_THRESHOLD",
        adminSettingsUpvoteThreshold: val
      }
      dispatch(action)
    },
    adminSettingsDistanceThreshold: (val = 0) => {
      const action = {
        type: "ADMIN_SETTINGS_DISTANCE_THRESHOLD",
        adminSettingsDistanceThreshold: val
      }
      dispatch(action)
    },
    adminSettingsNotifThreshold: (val = 0) => {
      const action = {
        type: "ADMIN_SETTINGS_NOTIFICATION_THRESHOLD",
        adminSettingsNotifThreshold: val
      }
      dispatch(action)
    }
  })
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

const store = createStore(appReducer);


setInterval(()=>{
  console.log(store.getState())
}, 15000)


class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


export { Root, App, store }

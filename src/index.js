import React from 'react';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import TestScreen from './components/TestScreen.js';
import { AppNavigator } from './Navigators.js';
import { appReducer, initialState } from './reducer';

const TEMP_USER_ID = 2;

class App extends React.Component {

  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    store.dispatch({type: 'FETCH_USER_DATA_REQUEST'});
    fetch(`http://localhost:3000/api/user?id=${TEMP_USER_ID}`)
    .then(res => res.json())
    .then(data => {
      // console.log('\nTHIS IS FETCHED USERDATA\n'+ JSON.stringify(data, null, 2));
      store.dispatch({type: 'FETCH_USER_DATA_SUCCESS', userData: data});
    })
    .catch(err => store.dispatch({type: 'FETCH_USER_DATA_FAILURE'}));
  }

  render() {
    return (
        <AppNavigator />
        );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

App = connect(mapStateToProps, initialState)(App);

const store = createStore(appReducer);

// setInterval(()=>{
//   console.log(store.getState())
// }, 4000)


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

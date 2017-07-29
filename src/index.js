import React from 'react';
import { combineReducers, createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import TestScreen from './components/TestScreen.js';
import { AppNavigator } from './Navigators.js';
import appReducer from './reducer';

const TEMP_USER_ID = 1;

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log('\nTHIS IS PROPS IN APP\n'+ JSON.stringify(props, null, 2));
    // store.dispatch({type: 'SET_SUBS', subs: ['foo','bar']})
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/user?id=${TEMP_USER_ID}`)
    .then(res => res.json())
    .then(data => {
      // console.log('\nTHIS IS FETCHED USERDATA\n'+ JSON.stringify(data, null, 2));
      store.dispatch({type: 'SET_SUBS', subs: data.subreddits});
    });
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



App = connect(mapStateToProps)(App);

const store = createStore(appReducer);

// setInterval(()=>{
//   console.log(store.getState())
// }, 4000)


class Root extends React.Component {
  constructor(props) {
    super(props);
    // console.log('\nTHIS IS PROPS IN ROOT\n'+ JSON.stringify(props, null, 2));
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

// console.log('\nTHIS IS THE STATE IN THE STORE\n' + JSON.stringify(store.getState(), null, 2));

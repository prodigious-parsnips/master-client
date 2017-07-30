import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { store } from './';
import TestScreen from './components/TestScreen.js';
import SubbedMap from './components/SubbedMap.js';
import SignIn from './components/SignIn.js';
import PostView from './components/PostView.js';
import Settings from './components/Settings/Settings.js'
import { getDrawerHeader } from './components/NavBar.js';

const DynamicDrawer = (props) => (
  <ScrollView >
    <DrawerItems {...props} />
  </ScrollView>
);

const Drawer = DrawerNavigator({
  Home: {screen: SubbedMap},
  Settings: {screen: Settings},
  Test: {screen: TestScreen},
  Account: {screen: SignIn}
}, {contentComponent: DynamicDrawer});

Drawer.navigationOptions = ({ navigation }) => {
  return {
    title: 'HereNow',
    headerStyle: {backgroundColor: 'rgba(0, 124, 220, 100)'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
    headerLeft: getDrawerHeader(navigation),
  }
}

const AppNavigator = StackNavigator({
  Drawer: {screen: Drawer},
  PostView: {screen: PostView},
  Posts: {screen: TestScreen},
});

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Posts'));

const nav = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export { AppNavigator, nav, initialNavState };

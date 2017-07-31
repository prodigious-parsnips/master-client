import React from 'react';
import { ScrollView, FlatList, TouchableOpacity, Text } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { store } from './';
import TestScreen from './components/TestScreen.js';
import SubbedMap from './components/SubbedMap.js';
import SignIn from './components/SignIn.js';
import PostView from './components/PostView.js';
import CreatePost from './components/CreatePost.js';
import { getDrawerHeader } from './components/NavBar.js';

const DynamicDrawer = (props) =>
{
return (

  <ScrollView >
    <DrawerItems {...props} />
  </ScrollView>
);
}
const Drawer = DrawerNavigator({
  Home: {screen: SubbedMap},
  Test: {screen: TestScreen},
  Account: {screen: SignIn}
}, {contentComponent: DynamicDrawer});

Drawer.navigationOptions = (props) => {
  return {
    title: 'HereNow',
    headerStyle: {backgroundColor: 'rgba(0, 124, 220, 100)'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
    headerLeft: getDrawerHeader(props),
  }
}

const AppNavigator = StackNavigator({
  Drawer: {screen: Drawer},
  PostView: {screen: PostView},
  CreatePost: {screen: CreatePost},
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

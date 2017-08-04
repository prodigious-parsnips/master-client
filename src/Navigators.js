import React from 'react';
import { ScrollView, FlatList, TouchableOpacity, Text } from 'react-native';
import { DrawerNavigator, StackNavigator, DrawerItems } from 'react-navigation';
import { connect } from 'react-redux';
import { store } from './';
import TestScreen from './components/TestScreen.js';
import SubbedMap from './components/SubbedMap.js';
import MapList from './components/MapList';
import SignIn from './components/SignIn.js';
import PostView from './components/PostView.js';
import CreatePost from './components/CreatePost.js';
import Settings from './components/Settings/Settings.js'
import CreateSub from './components/CreateSub.js';
import { getDrawerHeader } from './components/NavBar.js';

const DynamicDrawer = (props) => {
  return (
    <ScrollView >
      <DrawerItems {...props} />
    </ScrollView>
  );
}

const Drawer = DrawerNavigator({
  Local: {screen: SubbedMap},
  Account: {screen: SignIn},
  Settings: {screen: Settings},
  Hubs: {screen: MapList},
  "Create Hub": {screen: CreateSub},
}, {contentComponent: DynamicDrawer});

Drawer.navigationOptions = (props) => {
  return {
    title: 'Breaking News',
    headerStyle: {backgroundColor: 'rgba(0, 124, 220, 100)'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
    headerLeft: getDrawerHeader(props),
  }
}

const AppNavigator = StackNavigator({
  Drawer: {screen: Drawer},
  Home: {screen: SubbedMap},
  PostView: {screen: PostView},
  CreatePost: {screen: CreatePost},
  PostView: {screen: PostView},
});

const initialNavState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));

const nav = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export { AppNavigator, nav, initialNavState };

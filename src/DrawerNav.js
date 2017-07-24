import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { StyleSheet, View, Switch, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import NavBarItem from './NavBarItem';
import HomeScreen from '../HomeScreen.js';
import Settings from './settings/Settings.js';
import SignIn from './SignIn.js';
import CreatePosts from './CreatePosts.js';
import { drawerObject } from '../index.ios.js';

const FAKE_USER_ID = 2;

const FAKE_SUBREDDITS = [
  {title: 'Local', id: 11},
  {title: 'Shows', id: 12},
  {title: 'Time-capsule', id: 13},
  {title: 'K911', id: 14}
];

const getDrawerItem = navigation => (
  <View style={styles.row}>
    <NavBarItem
      iconName="bars"
      onPress={() => {
        // check if drawer is not open
        if (navigation.state.index === 0) {
          // open drawer
          navigation.navigate('DrawerOpen');
        } else {
          // else close drawer
          navigation.navigate('DrawerClose');
        }
      }}
    />
    {navigation.state.index === 0 && <NavBarItem
      iconName="plus"
      onPress={() => {
        navigation.navigate('CreatePosts')
      }}
    />}
    {navigation.state.index === 0 && <Switch style={styles.slider}/>}
  </View>
);

// icon generator function
const getDrawerIcon = (iconName, tintColor) => <Icon title={iconName} size={20} color={tintColor} />;
// drawer icons:
const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const settingsDrawerIcon = ({ tintColor }) => getDrawerIcon('cog', tintColor);
const signinDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);

const generateRoutes = (subs) => {
  var routes = {}

  subs.forEach(sub => {
    routes[sub.title] = { screen: HomeScreen}
  });
  return routes
}
// drawer icon settings:

const homeNavOptions = {
    title: 'Home',
    headerTitle:'Home',
    headerStyle: {backgroundColor: 'rgba(0, 124, 220, 100)'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
    drawerLabel: 'Home',
    drawerIcon: homeDrawerIcon,
  };
const settingsNavOptions = {
    title: 'Settings',
    headerTitle:'Settings',
    headerStyle: {backgroundColor: 'rgba(0, 124, 220, 100)'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
    drawerLabel: 'Settings',
    drawerIcon: homeDrawerIcon,
  };
const signinNavOptions = {
    title: 'Sign In',
    headerTitle:'Sign In',
    headerStyle: {backgroundColor: 'rgba(0, 124, 220, 100)'},
    headerTitleStyle: {color: 'white'},
    headerTintColor: 'white',
    drawerLabel: 'Sign In',
    drawerIcon: homeDrawerIcon,
  };

// instantiate drawer
const Drawer = DrawerNavigator({
    HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
    SignIn : { screen: SignIn, navigationOptions: signinNavOptions },
    Settings: { screen: Settings, navigationOptions: settingsNavOptions },
    ...generateRoutes(FAKE_SUBREDDITS),
  },
    {drawerWidth: 300, drawerPosition: 'left', initialRouteName: 'HomeScreen'});

Drawer.navigationOptions = ({navigation}) => {
  return {
    title: 'HereNow',
    headerStyle: {
      backgroundColor: 'rgba(0, 124, 220, 100)',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
    headerLeft: getDrawerItem(navigation),
  }
};

export default Drawer;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  slider: {
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    right: -250
  },
});

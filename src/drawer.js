import { DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions, getDrawerConfig } from './utils/navigation.js';
import NavBarItem from './NavBarItem';
import HomeScreen from '../HomeScreen.js';
import Settings from './settings/Settings.js';
import SignIn from './SignIn.js';


const getDrawerItem = navigation => (
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
);
// FontAwesome icon generator function
const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;
// icons:
const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const settingsDrawerIcon = ({ tintColor }) => getDrawerIcon('cog', tintColor);
const signinDrawerIcon = ({ tintColor }) => getDrawerIcon('gear', tintColor);

// icon settings:
const homeNavOptions = getDrawerNavigationOptions('Home', 'rgba(0, 124, 220, 100)', 'white', homeDrawerIcon);
const settingsNavOptions = getDrawerNavigationOptions('Settings', 'rgba(0, 124, 220, 100)', 'white', settingsDrawerIcon);
const signinNavOptions = getDrawerNavigationOptions('Sign In', 'rgba(0, 124, 220, 100)', 'white', signinDrawerIcon);


const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
  Settings: { screen: Settings, navigationOptions: settingsNavOptions },
  SignIn : { screen: SignIn, navigationOptions: signinNavOptions },
}, getDrawerConfig(300, 'left', 'HomeScreen'));

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('AwesomeProject', 'rgba(0, 124, 220, 100)', 'white', getDrawerItem(navigation));

export default Drawer;

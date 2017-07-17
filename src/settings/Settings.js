import React from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>Settings!!!</Text>
        <Button
          title="View User Settings"
          color="#000000"
          onPress={() => navigate('UserSettings')} />
          <Button
            title="View Admin Settings"
            color="#000000"
            onPress={() => navigate('AdminSettings')} />
        <UserSettings />
        <AdminSettings />
      </ScrollView>
    );
  }
}

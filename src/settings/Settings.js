import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';

export default class Settings extends React.Component {
  render() {
    return (
      <View>
        <Text>Settings!!!</Text>
        <Button
          title="View User Settings"
          color="#000000"
          accessibilityLabel="Learn more about this purple button" />
          <Button
            title="View Admin Settings"
            color="#000000"
            accessibilityLabel="Learn more about this purple button" />
        <UserSettings />
        <AdminSettings />
      </View>
    );
  }
}

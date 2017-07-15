import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';

export default class Settings extends React.Component {
  render() {
    return (
      <View>
        <Text>Settings</Text>
        <UserSettings />
        <AdminSettings />
      </View>
    );
  }
}

// const settingsStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

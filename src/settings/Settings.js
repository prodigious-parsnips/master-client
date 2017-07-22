import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';

import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';



export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Title - Click Me</Text>
      </View>
    );
  }

  renderContent(section) {
    return (
      <View>
        <UserSettings />
      </View>
    );
  }

  renderContent2(section) {
    return (
      <View>
        <AdminSettings />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>Settings!!!</Text>
        <Button title="View User Settings" color="#000000" onPress={() => navigate('UserSettings')} />
        <Button title="View Admin Settings" color="#000000" onPress={() => navigate('AdminSettings')} />

        <Text>Admin Settings Panels</Text>
        <Accordion
          sections={['Section 1', 'Section 2', 'Section 3']}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent2}
        />

        <Text>User Settings Panels</Text>
        <Accordion
          sections={['Section 1', 'Section 2', 'Section 3']}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 10,
  },
  title: {
    backgroundColor: 'rgba(0, 124, 220, 100)',
    borderColor: 'red',
    borderStyle: 'solid'
  },
});

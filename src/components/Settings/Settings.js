import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import UserSettings from './UserSettings.js';
import AdminSettings from './AdminSettings.js';
import {connect} from 'react-redux';
import defaultStyle from '../../styles';
var { height, width } = Dimensions.get('window');

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };


  componentDidMount() {
    console.log("SETTINGS props", this.props);
  }


  renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
    );
  }

  renderAdminSettings(section) {
    // console.log("inside of renderAdminSettings", this.props);
    return (
      <View>
        <AdminSettings
          adminSettingsUpvoteThreshold={this.props.adminSettingsUpvoteThreshold}
          adminSettingsUpvoteThresholdValue={this.props.adminSettingsUpvoteThresholdValue}
          adminSettingsDistanceThreshold={this.props.adminSettingsDistanceThreshold}
          adminSettingsDistanceThresholdValue={this.props.adminSettingsDistanceThresholdValue}
          adminSettingsNotifThreshold={this.props.adminSettingsNotifThreshold}
          adminSettingsNotifThresholdValue={this.props.adminSettingsNotifThresholdValue}
          userId={this.props.userId}
          adminSettingsTitle={this.props.adminSettingsTitle}
          adminSettingsDescription={this.props.adminSettingsDescription}
          adminSettingsTitleText={this.props.adminTitle}
          adminSettingsDescriptionText={this.props.adminDescription}
        />
      </View>
    );
  }

  renderUserSettings(section) {
    return (
      <View>
        <UserSettings
          userSettingsUpvoteThreshold={this.props.userSettingsUpvoteThreshold}
          userSettingsUpvoteThresholdValue={this.props.userSettingsUpvoteThresholdValue}
          userSettingsDistanceThreshold={this.props.userSettingsDistanceThreshold}
          userSettingsDistanceThresholdValue={this.props.userSettingsDistanceThresholdValue}
          userSettingsNotifThreshold={this.props.userSettingsNotifThreshold}
          userSettingsNotifThresholdValue={this.props.userSettingsNotifThresholdValue}
          userId={this.props.userId}
        />
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        {this.props.isAdmin.length > 0 && <View style={styles.admin}>
          <Text style={defaultStyle.centerAlignedItems}>Admin Settings Panel</Text>
          <Accordion style={styles.accordion}
            sections={['Section 1']}
            renderHeader={this.renderHeader.bind(this)}
            renderContent={this.renderAdminSettings.bind(this)}
          />
        </View>}
        <View style={styles.users}>
          <Text style={defaultStyle.centerAlignedItems}>User Settings Panel</Text>
          <Accordion
            sections={['Section 1']}
            renderHeader={this.renderHeader.bind(this)}
            renderContent={this.renderUserSettings.bind(this)}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    userSettingsUpvoteThresholdValue: state.settings.userSettingsUpvoteThreshold,
    userSettingsDistanceThresholdValue: state.settings.userSettingsDistanceThreshold,
    userSettingsNotifThresholdValue: state.settings.userSettingsNotifThreshold,
    adminSettingsUpvoteThresholdValue: state.settings.adminSettingsUpvoteThreshold,
    adminSettingsDistanceThresholdValue: state.settings.adminSettingsDistanceThreshold,
    adminSettingsNotifThresholdValue: state.settings.adminSettingsNotifThreshold,
    userId: state.user.userData.id,
    adminTitle: state.settings.adminSettingsTitle,
    adminDescription: state.settings.adminSettingsDescription,
    isAdmin: state.user.userData.admin_preferences
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    userSettingsUpvoteThreshold: (val = 0) => {
      // console.log('UPVOTE VAL', val)
      const action = {
        type: "USER_SETTINGS_UPVOTE_THRESHOLD",
        userSettingsUpvoteThreshold: val
      }
      dispatch(action)
    },
    userSettingsDistanceThreshold: (val = 0) => {
      const action = {
        type: "USER_SETTINGS_DISTANCE_THRESHOLD",
        userSettingsDistanceThreshold: val
      }
      dispatch(action)
    },
    userSettingsNotifThreshold: (val = 0) => {
      const action = {
        type: "USER_SETTINGS_NOTIFICATION_THRESHOLD",
        userSettingsNotifThreshold: val
      }
      dispatch(action)
    },

    adminSettingsUpvoteThreshold: (val = 0) => {
      const action = {
        type: "ADMIN_SETTINGS_UPVOTE_THRESHOLD",
        adminSettingsUpvoteThreshold: val
      }
      dispatch(action)
    },
    adminSettingsDistanceThreshold: (val = 0) => {
      const action = {
        type: "ADMIN_SETTINGS_DISTANCE_THRESHOLD",
        adminSettingsDistanceThreshold: val
      }
      dispatch(action)
    },
    adminSettingsNotifThreshold: (val = 0) => {
      const action = {
        type: "ADMIN_SETTINGS_NOTIFICATION_THRESHOLD",
        adminSettingsNotifThreshold: val
      }
      dispatch(action)
    },
    adminSettingsTitle: (val = '') => {
      console.log('ADMIN SETTINGS TITLE VAL ', val)
      const action = {
        type: "ADMIN_SETTINGS_TITLE",
        adminSettingsTitle: val
      }
      dispatch(action)
    },
    adminSettingsDescription: (val = '') => {
      console.log('ADMIN SETTINGS Description VAL ', val)
      const action = {
        type: "ADMIN_SETTINGS_DESCRIPTION",
        adminSettingsDescription: val
      }
      dispatch(action)
    },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 5
  },

  title: {
    backgroundColor: 'white',
    borderColor: 'rgba(0, 124, 220, 100)',
    borderStyle: 'solid',
    borderWidth: .5,
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8
  },

});

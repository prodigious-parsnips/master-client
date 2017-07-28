import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { TouchableOpacity, View, StyleSheet, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';

class NavBarItem extends Component {
  render() {
    const { iconName, onPress } = this.props;
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 20, paddingVertical: 10, }}
        onPress={() => onPress()}
      >
        <Icon name={iconName} size={20} color="#fff" />
      </TouchableOpacity>
    );
  }
}

export default NavBarItem;

  // <View style={styles.row}>
const getDrawerHeader = navigation => (
  <View>
    <NavBarItem
      iconName="bars"
      onPress={() => {
        if (navigation.state.index === 0) {
          navigation.navigate('DrawerOpen');
        } else {
          navigation.navigate('DrawerClose');
        }
      }}
    />
  </View>
);

// {navigation.state.index === 0 && <Switch />}


export { getDrawerHeader };

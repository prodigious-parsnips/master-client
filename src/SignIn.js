import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements'

// https://github.com/oblador/react-native-vector-icons#installation

export default SignIn = () => (
  <View>
    <Text>Sign In!!!</Text>
    <View style={styles.row}>
      <SocialIcon title='Sign In With Facebook' button type='facebook' />
      <SocialIcon title='Sign In With Github' button type='github' />
      <SocialIcon title='Sign In With Twitter' button type='twitter' />
      <SocialIcon title='Sign In With Youtube' button type='youtube' />
    </View>

  </View>
);

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
  },
});

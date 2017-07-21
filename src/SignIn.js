import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SocialIcon } from 'react-native-elements'

// https://github.com/oblador/react-native-vector-icons#installation

export default SignIn = () => (
  <View>
    <Text>Sign In!!!</Text>
    <View style={styles.row}>
      <SocialIcon title='Sign In With Facebook' button type='facebook' onPress={() => console.log('hello')}/>
      <SocialIcon title='Sign In With Github' button type='github' />
      <SocialIcon title='Sign In With Twitter' button type='twitter' />
      <SocialIcon style={styles.google} title='Sign In With Google' button type='google' />
    </View>

  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
  },
  google: {
    backgroundColor: 'red',
  },
});

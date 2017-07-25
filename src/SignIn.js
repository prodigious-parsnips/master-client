import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SocialIcon } from 'react-native-elements'

// https://github.com/oblador/react-native-vector-icons#installation

export default SignIn = (props) => (
  <View>
    <View style={styles.row}>
      <Text>Sign In</Text>
      <TextInput style={styles.login} placeholder="Username" 
        onChangeText={(text)=>{props.screenProps.handleSignInActions('username', text)}}
      />
      <TextInput style={styles.pass} placeholder="Password" 
        onChangeText={(text)=>{props.screenProps.handleSignInActions('password', text)}}
      />
      <SocialIcon title='Sign Into HereNow' button type='facebook' 
        onPress={()=>{props.screenProps.handleSignInActions('submit')}}
      />

      <Text>Sign Up</Text>
      <TextInput style={styles.login} placeholder="Username" 
        onChangeText={(text)=>{props.screenProps.handleSignUpActions('username', text)}}
      />
      <TextInput style={styles.pass} placeholder="Password" 
        onChangeText={(text)=>{props.screenProps.handleSignUpActions('password', text)}}
      />
      <SocialIcon title='Sign Up For HereNow' button type='facebook' 
        onPress={()=>{props.screenProps.handleSignUpActions('submit')}}
      />

    </View>

  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  login: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  pass: {
    marginTop: 2,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  google: {
    backgroundColor: 'red',
  },
});

  // <SocialIcon title='Sign In With Github' button type='github' />
  // <SocialIcon title='Sign In With Twitter' button type='twitter' />
  // <SocialIcon title='Sign In With Google' button type='google' style={styles.google} />




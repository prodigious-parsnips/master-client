import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements'

// https://github.com/oblador/react-native-vector-icons#installation

export default SignIn = (props) => (
  <ScrollView>
    <View style={styles.row}>
      <Text>Sign In</Text>
      <TextInput style={styles.login} placeholder="Username"
        onChangeText={(text)=>{props.screenProps.handleSignInActions('username', text)}}
      />
      <TextInput style={styles.pass} placeholder="Password"
        onChangeText={(text)=>{props.screenProps.handleSignInActions('password', text)}}
      />

      <Button
        raised iconRight icon={{name: 'person'}}
        title='Sign Into HereNow' buttonStyle={styles.button}
        onPress={()=>{props.screenProps.handleSignInActions('submit')}}
      />

      <Text>Sign Up</Text>
      <TextInput style={styles.login} placeholder="Username"
        onChangeText={(text)=>{props.screenProps.handleSignUpActions('username', text)}}
      />
      <TextInput style={styles.pass} placeholder="Password"
        onChangeText={(text)=>{props.screenProps.handleSignUpActions('password', text)}}
      />

      <Button
        raised iconRight icon={{name: 'add'}}
        title='Sign Up For HereNow' buttonStyle={styles.button}
        onPress={()=>{props.screenProps.handleSignUpActions('submit')}}
      />
    </View>

  </ScrollView>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    
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
  button: {
    marginTop: 2,
    backgroundColor:'rgba(0, 124, 220, 100)',
  },
});

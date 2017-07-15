import React from 'react';
import { Text, View } from 'react-native';

export default SignIn = () => (
  <View>
    <Text>Sign In!!!</Text>
    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
      <View style={{width: 100, height: 50, backgroundColor: 'powderblue'}} >
        <Text>Sign in with this</Text>
      </View>
      <View style={{width: 100, height: 50, backgroundColor: 'skyblue'}}>
        <Text>Sign in with that</Text>
      </View>
    </View>
  </View>
);

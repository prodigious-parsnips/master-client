import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TestScreen extends Component {
  constructor(props) {
    super(props);
    console.log('\nTHIS IS PROPS IN TESTSCREEN\n'+ JSON.stringify(props, null, 2));
  }
  render() {
    return (
      <View {...this.props}>
        <Text>{JSON.stringify(this.props, null, 2)}</Text>
      </View>
    )
  }
}

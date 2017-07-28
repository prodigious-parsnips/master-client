import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Root } from './src';


export default class AwesomeProject extends Component {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

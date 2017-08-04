import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class CreateComment extends React.Component {
  render() {
    return (
      <View>
        <TextInput style={styles.textBox} placeholder="Comment" multiline={true} numberOfLines={4} onChangeText={this.props.updateComment}/>
        <Button raised fontSize={10} iconRight icon={{name: 'check'}} buttonStyle={styles.button} title='Submit Comment' onPress={this.props.submitComment} />
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  textBox: {
    margin: 5,
    height: 60,
    borderWidth: 1.5,
    borderRadius: 5,
    fontSize: 12,
  },
  button: {
    marginTop: 5,
    backgroundColor:'rgba(0, 124, 220, 100)',
    height: 20,
  },
})

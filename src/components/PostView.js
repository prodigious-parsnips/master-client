import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

class PostView extends React.Component {

  findPost() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>PostView</Text>
        <Text style={styles.title}>{this.props.posts.currentPost.title}</Text>
        <Text style={styles.message}>{this.props.posts.currentPost.text}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => {
  return ({
  });
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  message: {
    marginTop: 2,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);

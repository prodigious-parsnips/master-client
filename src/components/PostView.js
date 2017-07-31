import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

class PostView extends React.Component {

  findPost() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <ScrollView>
        <Text>PostView</Text>
        <Text>{this.props.posts.currentPost.title}</Text>
        <Text>{this.props.posts.currentPost.text}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => {
  return ({
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(PostView);

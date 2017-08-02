import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Promise from 'bluebird';
Promise.promisifyAll(navigator.geolocation);

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.submitPost = this.submitPost.bind(this);
  }
  submitPost() {
    this.props.submittingPost();
    //get the geo location here and save as a variable
    navigator.geolocation.getCurrentPositionAsync()
    .catch((position)=>{
      fetch("http://localhost:3000/api/messages", {
          method: "POST",
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          body: JSON.stringify({
            userId: this.props.user.id,
            title: this.props.userPost.title,
            text: this.props.userPost.text,
            geotag: position.coords,
            subId: this.props.user.currentSub,
          }),
        })
      .then(response => response.json())
      .then(data => {
        this.props.submittedPost();
        this.props.navigation.navigate('Home');
      })
      .catch(err => this.props.submissionFailed(err));
    })
    .then(response => response.json())
    .then(data => {
      this.props.submittedPost();
      this.props.updatePostTitle();
      this.props.updatePostText();
      this.props.navigation.navigate('Home');
    })
    .catch(err => this.props.submissionFailed(err));
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput style={styles.title} placeholder="Title" onChangeText={this.props.updatePostTitle} />
        <TextInput style={styles.message} placeholder="Message" onChangeText={this.props.updatePostText} />
        <Button raised iconRight icon={{name: 'check'}} title='Submit Pin' buttonStyle={styles.button} onPress={this.submitPost} />
      </ScrollView>
    );
  }
}


const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => {
  return ({
    updatePostTitle: (title) => dispatch({type:'UPDATE_POST_TITLE', title:title}),
    updatePostText: (text) => dispatch({type:'UPDATE_POST_TEXT', text:text}),
    submittingPost: () => dispatch({type:'SUBMITTING_POST'}),
    submittedPost: () => dispatch({type:'SUBMITTED_POST'}),
    submissionFailed: (err) => dispatch({type:'SUBMISSION_FAILED', err:err}),
  });
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
    padding: 25,
  },
  title: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  message: {
    marginTop: 2,
    height: 100,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  button: {
    marginTop: 2,
    backgroundColor:'rgba(0, 124, 220, 100)',
  },

});

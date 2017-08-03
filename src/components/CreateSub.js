import React from 'react';
import { View, Text, TextInput, Button, Slider } from 'react-native';
import { connect } from 'react-redux';


class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.submitMap = this.submitMap.bind(this);

  }

  submitMap() {
    // console.log('hello', this.props);
    fetch("http://localhost:3000/api/map", {
      method: "POST",
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({
        upvoteThreshold: this.props.userMap.upvoteThreshold,
        distanceThreshold: this.props.userMap.distanceThreshold,
        mapTitle: this.props.userMap.title,
        mapDescription: this.props.userMap.description,
        userId: this.props.user.userData.id,
      }),
    })
    .then(() => {
      this.props.submittedMap();
      this.props.updateMapTitle();
      this.props.updateUpvoteThreshold(0);
      this.props.updateDistanceThreshold(0);
      this.props.updateMapDescription();
      this.props.navigation.navigate('Home');
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View>
      <Text>CreatMap</Text>
        <TextInput placeholder="Title" onChangeText={this.props.updateMapTitle}/>
        <TextInput placeholder="Descriptions" onChangeText={this.props.updateMapDescription}/>
        <Text>Upvote Threshold: </Text>
        <Slider style={{width:200}} maximumValue={10} step={1} onValueChange={this.props.updateUpvoteThreshold}/>
        <Text>Distance Threshold: </Text>
        <Slider style={{width:200}} maximumValue={10} step={1} onValueChange={this.props.updateDistanceThreshold}/>
        <Button title="Submit" onPress={this.submitMap}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  updateMapTitle: (title) => dispatch({type:'UPDATE_MAP_TITLE', title:title}),
  updateMapDescription: (description) => dispatch({type:'UPDATE_MAP_DESCRIPTION', description:description}),
  updateUpvoteThreshold: (value) => dispatch({type:'UPDATE_UPVOTE_THRESHOLD', value:value}),
  updateDistanceThreshold: (value) => dispatch({type:'UPDATE_DISTANCE_THRESHOLD', value:value}),
  submittingMap: () => dispatch({type:'SUBMITTING_MAP'}),
  submittedMap: () => dispatch({type:'SUBMITTED_MAP'}),
  submissionFailed: (err) => dispatch({type:'MAP_SUBMISSION_FAILED', err:err}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);

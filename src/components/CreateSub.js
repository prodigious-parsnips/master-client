import React from 'react';
import { View, Text, TextInput, Button, Slider, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import defaultStyles from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome';


class CreateComment extends React.Component {

  static navigationOptions = { drawerIcon: () => <Icon name={'plus'} size={20} color={'rgba(0, 124, 220, 100)'} /> }

  constructor(props) {
    super(props);
    this.submitMap = this.submitMap.bind(this);

  }

  componentDidMount() {
    console.log('CREATE SUB PROPS!!!!!!!! ', this.props)
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
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={defaultStyles.containerAlt}>
      <Text style={styles.title}>Create a New Hub</Text>
        <TextInput multiline = {true} style={styles.input} placeholder="Title" onChangeText={this.props.updateMapTitle}/>
        <TextInput  multiline = {true} numberOfLines = {4} style={styles.inputDescription} placeholder="Descriptions" onChangeText={this.props.updateMapDescription}/>
        <Text  >Upvote Threshold: </Text>
        <Slider style={{width:200}} maximumValue={10} step={1} onValueChange={this.props.updateUpvoteThreshold}/>
        <Text  >Distance Threshold: </Text>
        <Slider style={{width:200}} maximumValue={10} step={1} onValueChange={this.props.updateDistanceThreshold}/>
        <Button title="Submit" onPress={() => {this.submitMap(); this.props.navigation.navigate('Local')}}/>
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

const styles = StyleSheet.create({
  input: {
    width: '60%',
    backgroundColor: '#f5f5f5',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 15,
    marginTop: 15,
    alignItems: 'center'
  },

  inputDescription: {
    width: '60%',
    backgroundColor: '#f5f5f5',
    height: 100,
    paddingTop: 8,
    marginTop: 15,
    marginBottom:15,
    alignItems: 'center'
  },

  title: {
    marginTop:10
  }

})

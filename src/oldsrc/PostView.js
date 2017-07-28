import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, FlatList, Button, TouchableOpacity, View } from 'react-native';

export default class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',
      comments: ''
    };
    this.addCommentsForIdofPost = this.addCommentsForIdofPost.bind(this);
    this.fetchCommentsForPost = this.fetchCommentsForPost.bind(this);
  }

  static navigationOptions = {
    title: 'PostView',
  };

  componentDidMount() {
    console.log('mounted');
    this.fetchCommentsForPost();
  }

  fetchCommentsForPost () {
    fetch(`http://localhost:3000/api/messages?postId=${this.props.navigation.state.params.id}`)
    .then(response => response.json())
    .then(data => {
      this.setState({comments: data}, () => {
        console.log('comments loaded from mount', this.state.comments);

      });
    })
    .catch(err => console.log(err));
  }

  addCommentsForIdofPost(event, postId) {
    console.log('what is val', postId);
     const { navigate } = this.props.navigation;
     var form = {
      subredditId: this.props.screenProps.userData.subreddits[0].id,
      postId: postId,
      userId: this.props.screenProps.userData.id,
      title: this.props.navigation.state.params.title,
      text: this.state.text,
      geotag: '454x, 565y',
      subId: null
    }
    fetch("http://localhost:3000/api/messages", {
      method: "POST",
       headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(form)
    }).then((data) => data.json())
      .then((data) => {
      this.setState({comments: data}, () => {
        console.log("comments from ajax", this.state.comments);
      })
    }).catch((err) => {
      console.log('GOT AN ERROR', err);
    })
  }

  render() {
    const params = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <Text>PostView!!!</Text>
        <Text style={styles.title} placeholder="Title">{params.title} </Text>
        <Text style={styles.message} placeholder="Title">{params.text}</Text>
        <Text>Comments</Text>
        <TextInput style={styles.message} placeholder="Comment" onChangeText={(text) => this.setState({text}, () => console.log(this.state.text))} />
        <Button raised iconRight icon={{name: 'check'}} title='Submit Comment' buttonStyle={styles.button} onPress={(event) => {this.addCommentsForIdofPost(event, this.props.navigation.state.params.id )}} />
        <FlatList style={styles.list}
          data={this.state.comments}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.container}>
              <PostPreview title={item.text}/>
            </TouchableOpacity>
          )}
        />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
  },
  message: {
    marginTop: 2,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
  },
});

import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';
import StatusBarAlert from 'react-native-statusbar-alert'

// https://github.com/oblador/react-native-vector-icons#installation

class SignIn extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      signIn: {
        username: null,
        password: null
      },
      signUp: {
        username: null,
        password: null
      },
      statusBarVisible: false
    }
  }

  handleTextChange(text, type){
    // console.log('this is type ', type)
    switch (type) {
      case 'signInUsername':
        this.setState((state)=>{
          newState = state;
          newState.signIn.username = text;
          return newState;
        });
        break;
      case 'signInPassword':
        this.setState((state)=>{
          newState = state;
          newState.signIn.password = text;
          return newState;
        });
        break;
      case 'signUpUsername':
        this.setState((state)=>{
          newState = state;
          newState.signUp.username = text;
          return newState;
        });
        break;
      case 'signUpPassword':
        this.setState((state)=>{
          newState = state;
          newState.signUp.password = text;
          return newState;
        });
        break;
    }


  }

  render() {
    return (
      <Container>
      <StatusBarAlert
        visible={this.state.statusBarVisible}
        message="Authentication succesful!"
        backgroundColor="#3CC29E"
        color="white"
      />

      <Header hasTabs />

        <Tabs initialPage={0}>

          <Tab heading="Sign In">
            <View style={styles.row}>
              <Text>Sign In</Text>
              <TextInput style={styles.login} placeholder="Username"
                onChangeText={(text)=>{this.handleTextChange(text, 'signInUsername')}}
              />
              <TextInput style={styles.pass} placeholder="Password"
                onChangeText={(text)=>{this.handleTextChange(text, 'signInPassword')}}
              />

              <Button
                raised iconRight icon={{name: 'person'}}
                title='Sign Into HereNow' buttonStyle={styles.button}
                onPress={()=>{this.props.handleSignIn(this.state.signIn, this.props.navigation.navigate)}}
              />
            </View>
          </Tab>

          <Tab heading="Sign Up">
            <View style={styles.row}>
              <Text>Sign Up</Text>
              <TextInput style={styles.login} placeholder="Create Username"
                onChangeText={(text)=>{this.handleTextChange(text, 'signUpUsername')}}
              />
              <TextInput style={styles.pass} placeholder="Create Password"
                onChangeText={(text)=>{this.handleTextChange(text, 'signUpPassword')}}
              />

              <Button
                raised iconRight icon={{name: 'person-add'}}
                title='Sign Up For HereNow' buttonStyle={styles.button}
                onPress={()=>{this.props.handleSignUp(this.state.signUp, this.props.navigation.navigate)}}
              />
            </View>
          </Tab>

        </Tabs>

      </Container>
    );
  }
}






const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUp: (credentials, navigate)=>{
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.username,
          password: credentials.password
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data.fail){
          Alert.alert('Error', 'User Already exists!');
          return;
        }
        dispatch({type: 'AUTHORIZE', userId: data.id})
        navigate('Home')
        // fetch(`http://localhost:3000/api/user?id=${data.id}`)
        // .then(res => res.json())
        // .then(data => {
        //   dispatch({type: 'FETCH_USER_DATA_SUCCESS', userData: data});

        // })
        // .catch(err => dispatch({type: 'FETCH_USER_DATA_FAILURE'}));
      })
      .catch(err => {
        console.log('this is the err ', err)
        Alert.alert('Error', 'There has been a server error');
      })
    },
    handleSignIn: (credentials, navigate)=>{
      fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.username,
          password: credentials.password
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data.fail){
          Alert.alert('Error', 'Incorrect Username or Password');
          return;
        }
        dispatch({type: 'AUTHORIZE', userId: data.id})
        fetch(`http://localhost:3000/api/user?id=${data.id}`)
        .then(res => res.json())
        .then(data => {
          dispatch({type: 'FETCH_USER_DATA_SUCCESS', userData: data});
          navigate('Home')
        })
        .catch(err => dispatch({type: 'FETCH_USER_DATA_FAILURE'}));
      })
      .catch(err => {
        console.log('this is the err ', err)
        Alert.alert('Error', 'There has been a server error');

      })
    },
  };
}

const mapStateToProps = (state)=>{
  return state.nav;
}


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  login: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  pass: {
    marginTop: 5,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  button: {
    marginTop: 5,
    backgroundColor:'rgba(0, 124, 220, 100)',
  },
});

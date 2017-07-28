import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { connect } from 'react-redux';

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
      }
    }
  }

  handleTextChange(event, type){
    console.log('this is an event??? ', event, type)

  }

  render() { 
    return (
      <Container>
        
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
                onPress={()=>{this.props.handleSignIn(this.state.signIn.username, this.state.signIn.password)}}
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
                onPress={()=>{this.props.handleSignUp(this.state.signUp.username, this.state.signUp.password)}}
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
    handleSignUp: (username, password)=>{ 
      console.log('handleSignUp is firing!')
      console.log('username ', username)
      console.log('password ', password)
      //dispatch({type: type, payload: event.target.value})
    },
    handleSignIn: (username, password)=>{
      console.log('handleSignIn is firing!')
      console.log('username ', username)
      console.log('password ', password)
      //dispatch({type: type, payload: event.target.value})
    },
  };

}


export default connect(()=>{return {}}, mapDispatchToProps)(SignIn);


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
    marginTop: 2,
    height: 40,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  button: {
    marginTop: 2,
    backgroundColor:'rgba(0, 124, 220, 100)',
  },
});

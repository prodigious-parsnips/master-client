
import React from 'react';
import Row from './Row';
import { View, ListView, StyleSheet, Text, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
});

class MapList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '6']),
    };
  }
  render() {
    console.log('this is the props in map list ', this.props)
    return (
      <View style={styles.container}>
        <Text style ={styles.text}>Select a Map</Text>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={() => <Row onClick={this.onMapClick.bind(this)}/>}
          />
      </View>
    );
  }
  onMapClick(){
    this.props.navigation.navigate('Home')
  }
}

const mapDispatchToProps = ()=>{
  return {};
}

const mapStateToProps = (state)=>{
  return state.nav;
}

export default connect(mapStateToProps, mapDispatchToProps)(MapList);
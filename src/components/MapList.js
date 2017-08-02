
import React from 'react';
import MapRow from './MapRow';
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

const localSub = {
  description: "All pins in your area",
  id: null,
  location_threshold: 20,
  title: "Local",
  upvote_threshold: 0,
}

class MapList extends React.Component {
  constructor(props) {
    super(props);
    console.log('this is props in map list! ', props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([localSub, ...props.userData.subreddits]),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style ={styles.text}>Select a Map</Text>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data, rowid, sectionid) => <MapRow sectionid={sectionid} mapData={data} onClick={this.onMapClick.bind(this)}/>}
          />
      </View>
    );
  }
  onMapClick(value){
    this.props.dispatch({type: 'SELECT_SUB', itemValue: value.mapData.id})
    this.props.navigation.navigate('Home')
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {dispatch: dispatch};
}

const mapStateToProps = (store)=>{
  return {
  nav: store.nav,
  userData: store.user.userData,
  posts: store.posts.postList,
  currentSub: store.user.currentSub,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapList);

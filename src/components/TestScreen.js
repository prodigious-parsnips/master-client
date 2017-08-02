import React from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

class TestScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>TestScreen</Text>
        <Text>{JSON.stringify(this.props, null, 2)}</Text>
      </ScrollView>
    );
  }
}

const mapStateToProps = store => store;
const mapDispatchToProps = dispatch => {
  return ({

  });
};
export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);

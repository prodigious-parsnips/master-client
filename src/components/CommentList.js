import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



export default class CommentList extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.heading}>Comments</Text>
          <FlatList
            data={this.props.comments}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.comment}>
                <Text style={styles.user}>{names[item.user_id]}</Text>
                <Text>{item.text}</Text>
              </View>
            )}/>
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  heading: {
    marginTop: 5,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  comment: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  user: {
    fontWeight: 'bold',
    color: '#355282',
    fontSize: 10,
  },
  text: {
    fontSize: 10,
  }
})

var names = [
  'Trey_Spinka',
  'Paris.Ledner',
  'Christelle_Bednar27',
  'Flavie_Wintheiser78',
  'Gudrun_Hammes84',
  'Emilio_McDermott',
  'Jayson.Ebert',
  'Ashton85',
  'Godfrey9',
  'Jamil_Grady33',
  'Bennie_Schulist',
  'Marjorie_Dooley',
  'Nelda_Kshlerin81',
  'Emmanuelle.Baumbach',
  'Ruben33',
  'Rosalinda.Smith22',
  'Seamus_Romaguera',
  'Cole.Hayes',
  'Noel54',
  'Fermin24',
  'Micah.Jast86',
  'Evert_Hand',
  'Marina_Rutherford99',
  'Alba_Cremin',
  'Marlee33',
  'Ally14',
  'Mavis_Reinger',
  'Joanne46',
  'Morris.Muller',
  'Hazel_Cassin97'
];

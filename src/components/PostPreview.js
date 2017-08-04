import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import styles from '../styles'
// export default class SubbedMap extends React.Component {
export default PostPreview = (props) => (
  <View style={styles.row}>
    <View style={styles.upvoteBox}>
      <Text style={styles.upvotes}>{props.upvotes}</Text>
    </View>
    <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/3f/28/54/3f2854b8c2962f0938050ff775129d47.jpg'}}
    style={styles.image} />
    <View style={styles.textBox}>
      <Text style={styles.title} >{props.title}</Text>
      <Text style={styles.sub} >posted by {names[props.author]}</Text>
      <Text style={styles.sub} >posted in {subs[props.subTitle]}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 124, 220, 100)',
  },
  textBox: {
    flex: 1,
    marginHorizontal: 5,
  },
  upvoteBox: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 40,
    borderRightWidth: 1,
    backgroundColor: '#5a98fc',
  },
  upvotes: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: .5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sub: {
    fontSize: 10,
    marginLeft: 8,
  },
});



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

var subs = [
  'Ergonomic Rubber Chair',
  'Devolved Refined Metal Salad',
  'Grocery',
  'Security quantify Clothing',
  'driver',
  'Garden redefine',
  'clear-thinking',
  'Fantastic Concrete Bike',
  'Response',
  'payment disintermediate Keyboard',
  'Functionality Bedfordshire',
  'calculating hard drive multi-byte',
  'New Hampshire',
  'generating',
  'Hat',
  'Parkways Handmade Parkway',
  'Via',
  'reboot Kids',
  'Officer',
  'lime invoice Borders',
  'Argentina scalable Unbranded',
  'Chile',
  'Creative Fresh',
  'Berkshire',
  'Rubber',
  'Handmade Frozen Shoes Mobility Bond Markets Units European Composite Unit (EURCO)',
  'payment Uruguay Sausages',
  'Associate',
  'Pizza Associate',
  'deposit Associate withdrawal'
];

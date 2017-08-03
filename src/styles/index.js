import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 3.5,
    borderColor: 'white',
  },
  list: {
    backgroundColor: 'white'
  },
  container: {
    borderRadius: 4,
    borderWidth: 0,
    borderColor: 'black',
  },
  containerAlt: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 124, 220, 100)',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: .5,
  },

  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 35,
    color: '#f5f5f5'
  },

  textAlt: {
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 15,
    color: 'black'
  },

  header: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 18,
    marginTop: 15,
  },

  centerAlignedItems: {
    fontSize: 13,
    fontWeight: 'normal',
    marginLeft: '33%',
    marginTop: 20,
    marginBottom: 5
  },



});

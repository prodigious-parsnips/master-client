import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  app: {
    backgroundColor: '#eff5ff',
    borderRadius: 4,
    borderWidth: 3.5,
    borderColor: '#eff5ff',
  },
  list: {
    backgroundColor: '#eff5ff'
  },
  container: {
    borderRadius: 4,
    borderTopWidth: .5,
    borderBottomWidth: .5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
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
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#D0E7F8'
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20
  },

});

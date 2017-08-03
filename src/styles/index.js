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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

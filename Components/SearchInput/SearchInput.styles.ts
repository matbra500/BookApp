import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 20,
    height: 50,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 16,
    height: 50,
  },
  button: {
    width: 100,
    backgroundColor: 'gold',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  searchText: {
    color: 'white',
    fontWeight: '600',
  },
});

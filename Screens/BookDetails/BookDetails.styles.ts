import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    color: 'gold',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '700',
  },
  author: {
    fontSize: 18,
    marginVertical: 10,
    color: 'gold',
    fontWeight: '700',
  },
  publishYear: {
    fontSize: 16,
    color: 'gold',
    fontWeight: '700',
  },
  bookImage: {
    width: 200,
    height: 220,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'gold',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});

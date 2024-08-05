import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  bookContainer: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginVertical: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'gold',
    backgroundColor: 'white',
  },
  bookItem: {
    flexDirection: 'row',
  },
  bookImageContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gold',
    borderRadius: 10,
  },
  bookImage: {
    width: 60,
    height: 85,
  },
  bookInfo: {
    marginLeft: 10,
    maxWidth: Platform.OS === 'ios' ? '70%' : '80%',
  },
  bookTitle: {
    fontSize: 16,
    color: 'gold',
    fontWeight: '700',
  },
  noCoverText: {
    color: 'white',
    fontWeight: '600',
  },
});

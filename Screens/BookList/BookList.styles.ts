import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: Platform.OS === 'ios' ? 50 : 5,
  },
  paginationNumber: {
    marginHorizontal: 5,
  },
  generalText: {
    color: 'gold',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledPagination: {
    color: 'transparent',
  },
  standardLeftWidth: {
    width: 80,
    alignItems: 'flex-start',
  },
  standardRightWidth: {
    width: 80,
    alignItems: 'flex-end',
  },
});

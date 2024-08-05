import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
  },
  skeletonWrapper: {
    overflow: 'hidden',
    marginVertical: 4,
  },
  skeleton: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  skeletonText: {
    height: 14,
    marginTop: 10,
    width: '100%',
  },
  skeletonButton: {
    height: 30,
    width: '30%',
    marginTop: 12,
  },
  gradient: {
    flex: 1,
  },
});

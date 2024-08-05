import React, {useEffect, useRef} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './SkeletonLoading.styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SkeletonLoader = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animate = () => {
      animatedValue.setValue(0);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => animate());
    };

    animate();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN_WIDTH, SCREEN_WIDTH],
  });

  return (
    <View style={styles.container}>
      <View style={styles.skeletonWrapper}>
        <Animated.View style={[styles.skeleton, {transform: [{translateX}]}]}>
          <LinearGradient
            colors={['#E0E0E0', '#F0F0F0', '#E0E0E0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
      <View style={styles.skeletonWrapper}>
        <Animated.View
          style={[
            styles.skeleton,
            styles.skeletonText,
            {transform: [{translateX}]},
          ]}>
          <LinearGradient
            colors={['#E0E0E0', '#F0F0F0', '#E0E0E0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
      <View style={styles.skeletonWrapper}>
        <Animated.View
          style={[
            styles.skeleton,
            styles.skeletonText,
            {transform: [{translateX}]},
          ]}>
          <LinearGradient
            colors={['#E0E0E0', '#F0F0F0', '#E0E0E0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
      <View style={styles.skeletonWrapper}>
        <Animated.View
          style={[
            styles.skeleton,
            styles.skeletonButton,
            {transform: [{translateX}]},
          ]}>
          <LinearGradient
            colors={['#E0E0E0', '#F0F0F0', '#E0E0E0']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

export default SkeletonLoader;

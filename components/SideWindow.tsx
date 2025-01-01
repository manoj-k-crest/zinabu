import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {COLORS, HEIGHT, WIDTH} from '../src/constants';
import {commonIcons} from '../src/assets/commonIcons';
import FilterMenu from './FilterMenu';

const SideWindow = () => {
  const translateX = useSharedValue(0); // Gesture position
  const [itemsFound, setItemsFound] = useState(1245);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = Math.max(ctx.startX + event.translationX, -WIDTH + 30); // Adjust width
    },
    onEnd: () => {
      // Determine whether to open or close based on the gesture position
      if (translateX.value > -(WIDTH - 150)) {
        translateX.value = withSpring(0); // Open fully
      } else {
        translateX.value = withSpring(-WIDTH + 30); // Close fully
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <PanGestureHandler
      activeOffsetX={[-10, 10]}
      onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.sideWindow, animatedStyle]}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Advanced Filter</Text>
            <Text style={styles.subtitle}>Find the exact item easily</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              width: 200,
              alignItems: 'center',
            }}>
            <Image source={commonIcons.query} style={{width: 20, height: 20}} />
            <Text
              style={{
                color: '#202020',
                fontWeight: '700',
                textAlign: 'right',
                fontSize: 15,
              }}>
              Start new Query
            </Text>
          </View>

          <FilterMenu />
          {/* <View
          style={{
            borderWidth: 1,
            backgroundColor: 'red',
          }}>
          <Text>hello</Text>
        </View> */}
        </ScrollView>
        
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  sideWindow: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: WIDTH - 30,
    height: '100%',
    backgroundColor: '#FBF7E8',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: 1,
  },
  scrollContent: {
    flexGrow: 1, // Ensures the content can scroll when necessary
    // paddingBottom: 20,
    // Ensures there's space at the bottom
  },
  header: {
    height: 120,
    backgroundColor: '#FBF7E8',
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#100D02',
  },
  subtitle: {
    fontSize: 14,
    color: '#100D02',
    textAlign: 'center',
  },
});

export default SideWindow;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearBorderColorView = ({title = ''}) => {
  return (
    <>
      <LinearGradient
        colors={['#F9B04B', '#CF637E']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <View style={styles.innerContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 60,
    width: '80%',
    borderRadius: 40,
  },
  innerContainer: {
    borderRadius: 30,
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default LinearBorderColorView;

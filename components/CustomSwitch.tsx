import {View, Text, Switch, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomSwitch({title = 'title'}) {
  return (
    <View style={[styles.radioButtonContainer, styles.dropdown]}>
      <Text
        style={{
          fontSize: 16,
          marginRight: 10,
        }}>
        {title}
      </Text>
      <Switch
        trackColor={{false: '#ccc', true: '#f8e5a8'}}
        thumbColor={true ? '#FFD700' : '#f4f3f4'}
        onValueChange={() => {}}
        value={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
    marginBottom: 25,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  innerContainerText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
    color: 'black',
  },
  innerContainer: {
    marginVertical: 5,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  plus: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '300',
  },
  innerContainerImage: {
    width: 150,
    height: 150,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  headerImage: {width: 50, height: 50},
  heading: {
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  dropdown: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

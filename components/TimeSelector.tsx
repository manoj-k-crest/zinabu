import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TimeSelector = ({onPress, time}) => {
  const [isAM, setIsAM] = useState(true); // AM/PM toggle

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ends</Text>
      <View style={styles.timeContainer}>
        {/* Time Input */}
        <TextInput
          style={styles.timeInput}
          value={time}
          onPress={onPress}
          keyboardType="numeric"
        />

        {/* AM/PM Toggle */}
        <TouchableOpacity
          style={[styles.toggleButton, isAM ? styles.activeButton : null]}
          onPress={() => setIsAM(true)}>
          <Text style={[styles.toggleText, isAM ? styles.activeText : null]}>
            AM
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.toggleButton, !isAM ? styles.activeButton : null]}
          onPress={() => setIsAM(false)}>
          <Text style={[styles.toggleText, !isAM ? styles.activeText : null]}>
            PM
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F4E5',
    borderRadius: 10,
    padding: 5,
  },
  timeInput: {
    fontSize: 16,
    backgroundColor: '#FFD76C',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    textAlign: 'center',
    width: 60,
  },
  toggleButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeButton: {
    backgroundColor: '#FFD76C',
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  activeText: {
    color: '#FFF',
  },
});

export default TimeSelector;

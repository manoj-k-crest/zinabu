import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import TimeSelector from './TimeSelector';

const CustomCalender = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('8:00 AM');
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = day => {
    setSelectedDate(day.dateString);
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) {
      const hours = selectedTime.getHours();
      const minutes = selectedTime.getMinutes();
      const formattedTime = `${hours % 12 || 12}:${
        minutes < 10 ? '0' : ''
      }${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
      setTime(formattedTime);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.calenderView}>
        <Calendar
          onDayPress={handleDateChange}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: '#FFC107',
            },
          }}
          theme={{
            selectedDayBackgroundColor: '#FFC107',
            todayTextColor: '#FF5722',
            arrowColor: '#FFC107',
          }}
        />
        <TimeSelector onPress={() => setShowTimePicker(true)} time={time} />
        {/* <Button title="Set Time" color="#FFC107" /> */}
        {showTimePicker && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            is24Hour={false}
            display="spinner"
            onChange={handleTimeChange}
          />
        )}
      </View>

      <Text style={styles.duration}>
        Campaign Duration: 2 Weeks 3 days 4 hours
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,

    marginVertical: 20,
    paddingHorizontal: 20,
  },
  calenderView: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  timeLabel: {
    fontSize: 16,
    marginVertical: 8,
  },
  duration: {
    fontSize: 14,
    marginTop: 16,
    color: '#666',
  },
});

export default CustomCalender;

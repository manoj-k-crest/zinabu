import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {commonIcons} from '../src/assets/commonIcons';

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    flexDirection: 'row',

    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    marginLeft: 60,
  },
});
export default function SettingHeader({title, navigation}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.headerImageContainer}>
        <Image
          source={commonIcons.backButton}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Profile Settings</Text>
    </View>
  );
}

import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingHeader from '../../components/SettingHeader';
import {BottonTabIcons} from '../../src/assets/BottomTabIcons';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  singleSettingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: 600,
    fontSize: 18,
    marginLeft: 10,
  },
});

export default function Post({navigation}) {
  const SingleSetting = ({imageUrl, title}) => {
    return (
      <View style={styles.singleSettingWrapper}>
        <Image source={imageUrl} style={styles.image} />
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView />
      <SettingHeader title="Profile Settings" navigation={navigation} />
      <View style={styles.container}>
        <SingleSetting imageUrl={BottonTabIcons.Post} title={'My interests'} />
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Notification Settings'}
        />
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Account Settings'}
        />

        <SingleSetting imageUrl={BottonTabIcons.Post} title={'Security'} />

        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Manage Subscriptions'}
        />

        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Manage billing'}
        />

        <SingleSetting imageUrl={BottonTabIcons.Post} title={'Support'} />
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Privacy policy'}
        />
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Terms And Conditions'}
        />
        <SingleSetting imageUrl={BottonTabIcons.Post} title={'Log Out'} />
      </View>
    </>
  );
}

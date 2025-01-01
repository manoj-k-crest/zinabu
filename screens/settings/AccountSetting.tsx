import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingHeader from '../../components/SettingHeader';
import {BottonTabIcons} from '../../src/assets/BottomTabIcons';
import {NavigationProps} from '../../src/constants/types';

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

const AccountSetting: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
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
      <SettingHeader title="Account Settings" navigation={navigation} />
      <View style={styles.container}>
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Account information'}
        />
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Suspend Account'}
        />
        <SingleSetting
          imageUrl={BottonTabIcons.Post}
          title={'Delete Account'}
        />
      </View>
    </>
  );
};

export default AccountSetting;

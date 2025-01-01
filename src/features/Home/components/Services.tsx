import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {ServiceTabs} from '../../../constants';
import {Colors} from '../../../styles/colors';

export default function Services({onServiceClick, selectedTab}) {
  const TabButton: FC<{
    title: ServiceTabs;
    isSelected: boolean;
    onPress: any;
  }> = ({title, isSelected, onPress}) => {
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: isSelected ? Colors.marketPlacePrimary : 'none',
            borderRadius: 25,
          },
        ]}
        onPress={() => onPress(title)}>
        <Text
          style={[
            {
              color: '#fff',
              padding: 10,
              fontWeight: isSelected ? '800' : '500',
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        borderWidth: 1,
        backgroundColor: Colors.marketBackMain,
      }}>
      {Object.values(ServiceTabs).map(tab => (
        <TabButton
          key={tab}
          title={tab}
          isSelected={selectedTab == tab}
          onPress={onServiceClick}
        />
      ))}
    </View>
  );
}

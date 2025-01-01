import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ServiceTabs} from '../../src/constants';
import {Colors} from '../../src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

export default function MyStore() {
  enum ServiceTabs {
    About = 'About',
    StoreItem = 'Store Item',
    Insights = 'Insights',
    Messages = 'Messages',
  }

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
              color: 'black',
              padding: 10,
              fontWeight: isSelected ? '800' : '500',
            },
          ]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [heightAnimation] = useState(new Animated.Value(0)); // Start with collapsed height

  const toggleCollapse = () => {
    Animated.timing(heightAnimation, {
      toValue: isCollapsed ? 450 : 0, // Change to desired expanded height
      duration: 300,
      useNativeDriver: false,
    }).start();
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View style={{padding: 10, paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>BMW Cabrio</Text>
            <View
              style={{backgroundColor: 'white', borderRadius: 25, padding: 7}}>
              <Icon name="heart-outline" size={20} color="black" />
            </View>
          </View>
        </View>

        <View
          style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          {Object.values(ServiceTabs).map(tab => (
            <TabButton
              key={tab}
              title={tab}
              isSelected={tab == 'About'}
              onPress={() => {}}
            />
          ))}
        </View>

        <View>
          <Image
            style={{
              width: '95%',
              height: 200,
              alignSelf: 'center',
              borderRadius: 25,
              marginVertical: 10,
            }}
            src="https://media.istockphoto.com/id/174695368/photo/bright-colored-photo-of-parking-lot-and-office-building.jpg?s=612x612&w=0&k=20&c=WXyVyVc9uvZAC6SXsOfpR__rpzBH-9KUumF7_ebem-o="
          />
          <View style={{position: 'relative'}}>
            <View
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{translateX: -10}, {translateY: -10}], // Center icon precisely
                backgroundColor: 'white',
                borderRadius: 25,
                padding: 10,
                zIndex: 1,
              }}>
              <Icon name="heart-outline" size={20} color="black" />
            </View>
            <Image
              style={{
                width: '95%',
                height: 200,
                alignSelf: 'center',
                borderRadius: 25,
                marginVertical: 10,
              }}
              src="https://media.istockphoto.com/id/174695368/photo/bright-colored-photo-of-parking-lot-and-office-building.jpg?s=612x612&w=0&k=20&c=WXyVyVc9uvZAC6SXsOfpR__rpzBH-9KUumF7_ebem-o="
            />
          </View>
        </View>

        <View>
          <View
            style={{
              ...styles.container,
              padding: 15,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: 500, letterSpacing: 1}}>
                Store details
              </Text>
              <TouchableOpacity onPress={toggleCollapse}>
                <Text>
                  {isCollapsed ? (
                    <Icon name="chevron-down-outline" size={20} color="gray" />
                  ) : (
                    <Icon name="chevron-up-outline" size={20} color="gray" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>

            <Animated.View style={[styles.content, {height: heightAnimation}]}>
              <View style={{marginVertical: 10}}>
                <Text style={styles.label}>Business name</Text>
                <Text style={styles.labelChild}>BOUI BRAUN store</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={styles.label}>Business contact number</Text>
                <Text style={styles.labelChild}>+446 7567 786786</Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={styles.label}>Business description </Text>
                <Text style={styles.labelChild}>
                  Lorem ipsum dolor sit amet consectetur. Sed eget cursus ut
                  nisl ante consectetur amet. Tempus porttitor ullamcorper etiam
                  tristique lectus in
                </Text>
              </View>
              <View style={{marginVertical: 10}}>
                <Text style={styles.label}>Business timings</Text>
                <View style={styles.row}>
                  <View style={styles.timing}>
                    <Text style={styles.subLabel}>Open at</Text>
                    <Text style={styles.labelChild}>07:30 Am</Text>
                  </View>
                  <View style={styles.timing}>
                    <Text style={styles.subLabel}>Close at</Text>
                    <Text style={styles.labelChild}>07:30 Am</Text>
                  </View>
                </View>
              </View>

              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Icon
                  name="location-outline"
                  size={20}
                  color="black"
                  style={{marginRight: 10}}
                />
                <Text style={styles.label}>Location</Text>
              </View>
              <Text style={styles.labelChild}>
                Democratic Republic of the Congo 1234 city,ave 2,apt 3434
              </Text>
            </Animated.View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  header: {
    padding: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    overflow: 'hidden', // Ensures content doesn't overflow during animation
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 8,
  },
  labelChild: {
    fontSize: 16,
    fontWeight: '400',
    opacity: 0.8,
    letterSpacing: 1,
  },
  subLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
    color: 'black',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  timing: {
    flex: 1,
    marginRight: 12,
  },
});

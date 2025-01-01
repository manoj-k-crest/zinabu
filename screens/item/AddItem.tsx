import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';
import CustomDropdown from '../../components/CustomDropdown';
import CustomSwitch from '../../components/CustomSwitch';
import {NavigationProps} from '../../src/constants/types';
import CustomTextInput from '../../components/CustomTextInput';

const styles = StyleSheet.create({
  headerTitle: {color: 'black', fontSize: 24, fontWeight: 'bold'},
  headerImage: {width: 50, height: 50},
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    margin: 5,
  },
  tagText: {
    color: '#333',
    fontSize: 14,
  },
  circle: {
    width: 50,
    height: 50,
    elevation: 5,
    shadowRadius: 3,
    borderRadius: 25,
    shadowOpacity: 0.3,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 2},
  },
  plus: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '300',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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

const AddItem: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  return (
    <>
      <SafeAreaView />

      <ScrollView style={{paddingHorizontal: 15, marginBottom: 15}}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AuthStack', {
                screen: 'selectPurpose',
              })
            }
            style={styles.backButton}>
            <Image
              source={commonIcons.backButton}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <Text>Enter your Details </Text>

          <Text style={{opacity: 0}}>LOGO</Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '50%',
            }}>
            {[null, null, null, null].map((image, index) => (
              <View
                key={index}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  overflow: 'hidden',
                  marginHorizontal: 5,
                  backgroundColor: '#d3d3d3',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative', // Necessary for absolute positioning of "+" sign
                }}>
                <TouchableOpacity
                  //   onPress={() => handleAddImage(index)}
                  activeOpacity={0.8}>
                  {image ? (
                    <Image
                      source={{uri: image}}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 40,
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        position: 'absolute',
                        zIndex: 1,
                        width: 20,
                        height: 20,
                        borderRadius: 12,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#000',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: 'bold',
                          color: '#000',
                        }}>
                        +
                      </Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <Text
            style={{
              marginTop: 20,
              fontSize: 16,
              color: '#333',
            }}>
            Upload Product Images
          </Text>
        </View>
        <CustomTextInput placeholder="This is the tile of the product" />
        <CustomTextInput placeholder="Enter Price" />
        <CustomTextInput placeholder="Enter Product Description" />

        <CustomDropdown placeholder="Market Palace" />

        <CustomDropdown placeholder="Product Category" />

        <CustomDropdown placeholder="Prod Sub-Category" />

        <CustomDropdown placeholder="Product Category" />

        <CustomDropdown placeholder="Product Type" />

        <CustomDropdown placeholder="Brand" />

        <CustomDropdown placeholder="Origin" />

        <CustomTextInput placeholder="Enter Quantity" />

        <CustomTextInput placeholder="Manufactured Date" />

        <CustomSwitch title="Discounted" />

        <CustomSwitch title="Promotional Item" />

        <CustomSwitch title="Return Policy*" />

        <CustomSwitch title="Age Restricted*" />

        <CustomSwitch title="Has Warranty*" />

        <CustomDropdown placeholder="New Arrivals" />

        <CustomSwitch title="On sale" />

        <CustomSwitch title="Whole sale" />

        <CustomSwitch title="Bargain" />

        <CustomSwitch title=" Accept offers" />

        <TouchableOpacity
          style={{
            backgroundColor: '#f7c64a',
            borderRadius: 25,
            width: '40%',
            alignItems: 'center',
            alignSelf: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>Post Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default AddItem;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {WIDTH} from '../src/constants';
import {commonIcons} from '../src/assets/commonIcons';
import {Colors} from '../src/styles/colors';
import CustomButton from './CustomButton';
import LinearBorderColorView from './LinearBorderColorView';
import FilterScreen from './FilterScreen';

const FilterMenu = () => {
  const [selectedValues, setSelectedValues] = useState({
    location: 'Tap here to select a location',
    industry: 'Tap here to select industry',
    sector: 'Tap here to select industry sector',
    productType: 'Tap here to select product type',
  });

  const [expandedSection, setExpandedSection] = useState(null);

  const filterOptions = {
    location: ['Makola', 'Accra', 'Kumasi'],
    industry: ['Industry A', 'Industry B', 'Industry C'],
    sector: ['Sector X', 'Sector Y', 'Sector Z'],
    productType: ['Type 1', 'Type 2', 'Type 3'],
  };

  const queryheaders = {
    location: 'Location',
    industry: 'Industry',
    sector: 'Industry Sector',
    productType: 'Product Type',
  };

  const toggleSection = section => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  const handleSelect = (section, item) => {
    setSelectedValues(prev => ({
      ...prev,
      [section]: item,
    }));
    setExpandedSection(null); // Collapse the section after selection
  };

  return (
    <View style={styles.container}>
      {Object.keys(filterOptions).map(section => (
        <View key={section} style={styles.sectionContainer}>
          <TouchableOpacity
            onPress={() => toggleSection(section)}
            style={styles.sectionHeaderContainer}>
            <View style={styles.queryHeaderContainer}>
              <Text style={styles.queryHeader}>{queryheaders[section]}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Image
                source={
                  expandedSection === section
                    ? commonIcons.selectIcon
                    : commonIcons.selectDown
                }
                style={styles.iconImage}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.header}
            onPress={() => toggleSection(section)}>
            <View style={styles.headerIconContainer}>
              <View style={styles.iconCircle}>
                <Text style={styles.icon}>A</Text>
              </View>
            </View>
            <Text style={styles.headerText}>{selectedValues[section]}</Text>
          </TouchableOpacity>

          {expandedSection === section && (
            <View style={styles.itemsContainer}>
              {filterOptions[section].map(item => (
                <TouchableOpacity
                  key={item}
                  style={styles.item}
                  onPress={() => handleSelect(section, item)}>
                  <View style={styles.iconCircle}>
                    <Text style={styles.icon}>A</Text>
                  </View>
                  <Text style={styles.itemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
      <View
        style={{
          borderWidth: 1,
          backgroundColor: Colors.marketBackMain,
          height: '60%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
          }}>
          <Image
            source={commonIcons.filterSet}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text style={{color: '#fff', fontSize: 20, fontFamily: 'open-sans'}}>
            Apply Advance filter
          </Text>
          <View
            style={{
              borderColor: 'green',
              width: '20%',
              alignItems: 'center',
            }}>
            <Image
              source={commonIcons.selectIcon}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                tintColor: '#fff',
              }}
            />
          </View>
        </View>
        {/* <FilterScreen></FilterScreen> */}
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            width: WIDTH - 30,
          }}>
          <CustomButton
            label="Reset"
            onPress={() => console.log('Reset pressed')}
            isFocused={true} // Add focus styling
            style={styles.resetButton}
            textStyle={undefined}
          />
          <CustomButton
            label="Apply"
            onPress={() => console.log('Apply pressed')}
            isFocused={false}
            style={styles.applyButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  applyButton: {
    width: 120,
    height: 50,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 60,
  },
  resetButton: {
    width: 120,
    height: 50,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#FBF7E8',
  },
  sectionContainer: {
    width: '100%',
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

    height: 40,
  },
  queryHeaderContainer: {
    width: '80%',
  },
  queryHeader: {
    fontSize: 16,
    color: '#636363',
    marginLeft: 20,
    fontFamily: 'open-sans',
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFAE4',

    width: '100%',
    elevation: 2,
    height: 55,
  },
  headerIconContainer: {
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 18,
    color: '#423D3D',
    fontWeight: 'bold',
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    color: '#312C2C',
    marginLeft: 20,
    fontFamily: 'open-sans',
  },
  itemsContainer: {
    backgroundColor: '#FFFAE4',
    width: WIDTH - 30,
    alignSelf: 'center',
  },
  item: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFAE4',
    marginLeft: 20,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});

export default FilterMenu;

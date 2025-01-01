import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Slider from '@react-native-community/slider';

const FilterScreen = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [priceRange, setPriceRange] = useState(1000);
  const [filters, setFilters] = useState({
    hasWarranty: false,
    discounted: false,
    onSale: false,
    wholesale: false,
    itemWithImage: false,
    newArrivals: false,
    promotionItems: false,
    stockAvailable: false,
    acceptReturns: false,
    itemCondition: 'new', // 'used' or 'new'
    rating: 3,
  });

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSwitch = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const setItemCondition = (condition) => {
    setFilters((prev) => ({ ...prev, itemCondition: condition }));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
        <Text style={styles.headerText}>Apply Advance Filters</Text>
      </TouchableOpacity>

      <Collapsible collapsed={isCollapsed}>
        <ScrollView contentContainerStyle={styles.content}>
          {/* Price Range */}
          <View style={styles.filterRow}>
            <Text style={styles.label}>Price Range</Text>
            <Slider
              value={priceRange}
              onValueChange={(value) => setPriceRange(value)}
              minimumValue={0}
              maximumValue={5000}
              step={50}
              thumbTintColor="#FFD700"
              minimumTrackTintColor="#FFD700"
              style={{ flex: 1 }}
            />
            <Text style={styles.sliderValue}>GHS {priceRange}</Text>
          </View>

          {/* Toggle Switches */}
          {[
            { label: 'Has Warranty', key: 'hasWarranty' },
            { label: 'Discounted', key: 'discounted' },
            { label: 'On Sale', key: 'onSale' },
            { label: 'Wholesale', key: 'wholesale' },
            { label: 'Item with image', key: 'itemWithImage' },
            { label: 'New Arrivals', key: 'newArrivals' },
            { label: 'Promotion Items', key: 'promotionItems' },
            { label: 'Stock Available', key: 'stockAvailable' },
            { label: 'Accept Returns', key: 'acceptReturns' },
          ].map(({ label, key }) => (
            <View key={key} style={styles.switchRow}>
              <Text style={styles.label}>{label}</Text>
              <Switch
                value={filters[key]}
                onValueChange={() => toggleSwitch(key)}
                trackColor={{ false: '#767577', true: '#FFD700' }}
                thumbColor={filters[key] ? '#FFD700' : '#f4f3f4'}
              />
            </View>
          ))}

          {/* Item Condition */}
          <View style={styles.filterRow}>
            <Text style={styles.label}>Item Condition</Text>
            <View style={styles.conditionRow}>
              <TouchableOpacity
                style={[
                  styles.conditionButton,
                  filters.itemCondition === 'used' && styles.activeCondition,
                ]}
                onPress={() => setItemCondition('used')}
              >
                <Text style={styles.conditionText}>Used</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.conditionButton,
                  filters.itemCondition === 'new' && styles.activeCondition,
                ]}
                onPress={() => setItemCondition('new')}
              >
                <Text style={styles.conditionText}>New</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Rating */}
          <View style={styles.filterRow}>
            <Text style={styles.label}>Rating</Text>
            <View style={styles.ratingRow}>
              {Array.from({ length: 5 }).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setFilters((prev) => ({ ...prev, rating: index + 1 }))}
                >
                  <Text style={filters.rating > index ? styles.starActive : styles.star}>
                    ★
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Year Manufactured */}
          <View style={styles.filterRow}>
            <Text style={styles.label}>Year Manufactured</Text>
            <TextInput
              placeholder="MM/DD/YY"
              style={styles.textInput}
              keyboardType="numeric"
            />
          </View>

          {/* Country of Origin */}
          <View style={styles.filterRow}>
            <Text style={styles.label}>Country of Origin</Text>
            <TextInput
              placeholder="United States of America"
              style={styles.textInput}
            />
          </View>
        </ScrollView>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    paddingVertical: 16,
  },
  filterRow: {
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  sliderValue: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  conditionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  conditionButton: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#DDD',
  },
  activeCondition: {
    backgroundColor: '#FFD700',
    borderColor: '#FFD700',
  },
  conditionText: {
    color: '#333',
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  star: {
    fontSize: 24,
    color: '#DDD',
    marginHorizontal: 4,
  },
  starActive: {
    fontSize: 24,
    color: '#FFD700',
    marginHorizontal: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default FilterScreen;

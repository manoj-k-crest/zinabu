import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper'; // Ensure this package is installed
import {WIDTH} from '../src/constants';

const Checklist = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Food & Beverages',
      expanded: false,
      selected: false,
      children: [
        {id: '1-1', name: 'Apple', selected: false},
        {id: '1-2', name: 'Banana', selected: false},
        {id: '1-3', name: 'Orange', selected: false},
      ],
    },
    {
      id: '2',
      name: 'Clothing & Apparel',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Carrot', selected: false},
        {id: '2-2', name: 'Broccoli', selected: false},
        {id: '2-3', name: 'Spinach', selected: false},
      ],
    },
    {
      id: '3',
      name: 'Electronics',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '4',
      name: 'Automotive',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '5',
      name: 'Home Improvement',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '6',
      name: 'Furniture',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '7',
      name: 'Healthcare',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '8',
      name: 'Cosmetics',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '9',
      name: 'Sports & Fitness',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
    {
      id: '10',
      name: 'Construction',
      expanded: false,
      selected: false,
      children: [
        {id: '2-1', name: 'Home Appliances', selected: false},
        {id: '2-2', name: 'Tablets & Laptops', selected: false},
        {id: '2-3', name: 'Smart Phones', selected: false},
        {id: '3-4', name: 'Smart Watches & Wearables', selected: false},
      ],
    },
  ]);

  const toggleExpand = id => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? {...item, expanded: !item.expanded} : item,
      ),
    );
  };

  const toggleSelectParent = parentId => {
    setData(prev =>
      prev.map(parent =>
        parent.id === parentId
          ? {
              ...parent,
              selected: !parent.selected,
              // No automatic toggle of child items here
            }
          : parent,
      ),
    );
  };

  const toggleSelectChild = (parentId, childId) => {
    setData(prev =>
      prev.map(parent =>
        parent.id === parentId
          ? {
              ...parent,
              children: parent.children.map(child =>
                child.id === childId
                  ? {...child, selected: !child.selected}
                  : child,
              ),
            }
          : parent,
      ),
    );
  };

  const renderChild = (children, parentId) => {
    return children.map(child => (
      <View key={child.id} style={styles.childItem}>
        <Checkbox
          color="#ECA61B"
          status={child.selected ? 'checked' : 'unchecked'}
          onPress={() => toggleSelectChild(parentId, child.id)}
        />
        <Text style={child.selected ? styles.selectedText : styles.defaultText}>
          {child.name}
        </Text>
      </View>
    ));
  };

  const renderItem = ({item}) => (
    <View>
      <View style={styles.parentItem}>
        <Checkbox
          color="#fff"
          status={item.selected ? 'checked' : 'unchecked'}
          onPress={() => toggleSelectParent(item.id)}
        />
        <TouchableOpacity onPress={() => toggleExpand(item.id)}>
          <Text style={styles.defaultText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
      {item.expanded && (
        <View style={styles.childrenContainer}>
          {renderChild(item.children, item.id)}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: '100%',
    // padding: 16,
  },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: "#e9ecef",
    // marginVertical: 4,
    borderRadius: 4,
    // backgroundColor: '#FCDD629E',
    // borderWidth:1,
    width: WIDTH,
  },
  childrenContainer: {
    paddingLeft: 32,
    backgroundColor: '#FDF9E6',

    width: WIDTH,
  },
  childItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginVertical: 2,
  },
  defaultText: {
    fontSize: 16,
  },
  selectedText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Checklist;

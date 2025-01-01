import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {commonIcons} from '../src/assets/commonIcons';

const {width} = Dimensions.get('window');

// Data for key features
const keyFeatures = [
  {id: '1', feature: 'Storefront with About us screen'},
  {id: '2', feature: 'Advanced Directory Service'},
  {id: '3', feature: 'List 5 Product Types'},
  {id: '4', feature: 'List 500 Products'},
  {id: '5', feature: 'Create Sale Campaigns'},
  {id: '6', feature: 'Target Advertisement'},
  {id: '7', feature: 'Target Sales Radius'},
  {id: '8', feature: 'Send Sales Notification'},
  {id: '9', feature: 'Chatbot Support'},
  {id: '10', feature: 'Chat with buyers via message'},
];

const FeatureList = () => {
  const renderFeature = ({item}) => (
    <View style={styles.featureItem}>
      <Image source={commonIcons.check} style={styles.icon} />
      <Text style={styles.featureText}>{item.feature}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Key Features</Text>
      <FlatList
        data={keyFeatures}
        renderItem={renderFeature}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262832',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
    margin:8
  },
  icon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  featureText: {
    fontSize: 17,
    color: '#E3E1E1',
  },
});

export default FeatureList;

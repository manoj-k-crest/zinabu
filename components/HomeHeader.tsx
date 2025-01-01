import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../src/styles/colors';
import {commonIcons} from '../src/assets/commonIcons';
import {HomeTabIcons} from '../src/assets/HomeTabIcons';
import MenuDrawer from 'react-native-side-drawer';
import LinearGradient from 'react-native-linear-gradient';
import {WIDTH} from '../src/constants';
import {useNavigation} from '@react-navigation/native';
import AppModal from './AppModal';
import SideWindow from './SideWindow';
import {fetchCategories} from '../src/api/category.service';
import { log } from 'sonarqube-scanner/build/src/logging';

const HomeHeader = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const [categories, setCategories] = useState([]);

 
  useEffect(async () => {
    const data = await fetchCategories();

    setCategories(data?.data);
  }, []);


  const navigation = useNavigation();

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = () => (
    <LinearGradient
      colors={['#FFED99', '#FFE57F']}
      style={styles.sideBarContainer}>
      <SafeAreaView />
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="close-outline" style={styles.closeButton} size={35} />
      </TouchableOpacity>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </LinearGradient>
  );

  return (
    <MenuDrawer
      open={isDrawerOpen}
      position="left"
      drawerContent={drawerContent()}
      drawerPercentage={60}
      animationTime={250}
      opacity={0.4}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          
          <View style={styles.iconPlaceholder} />
        </View>
        <StatusBar backgroundColor={Colors.marketPlaceHome} />

        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <Icon
              name="search"
              size={25}
              color="gray"
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Looking for ......"
              placeholderTextColor="gray"
            />
            <Image source={commonIcons.camera} style={styles.cameraIcon} />
            <Image source={commonIcons.mic} style={styles.micIcon} />
          </View>
          <TouchableOpacity
            // onPress={() => navigation.navigate('customer-filters')}
            style={styles.filterButton}>
            <Image source={commonIcons.filter} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.middleRow}>
          <View style={styles.leftSection}>
            <Icon onPress={toggleDrawer} name="bag-remove" size={20} style={styles.leftIcon} />
            <Text style={styles.leftText}>Cosmetics</Text>
          </View>
          <View style={styles.locationSection}>
            <Image source={HomeTabIcons.Location} style={styles.locationIcon} />
            <Text style={styles.locationText}>@Makola (15 mi)</Text>
          </View>
        </View>
      </View>
    </MenuDrawer>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 8,
    color: '#767171',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  sideBarContainer: {
    paddingBottom: 200,
    backgroundColor: Colors.marketPlacePrimary,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: Colors.marketPlaceHome,
  },
  closeButton: {
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    width: 40,
    margin: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'flex-end',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconPlaceholder: {
    width: 25,
  },
  searchBarContainer: {
    width: WIDTH - 30,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 6,
    width: '80%',
    borderRadius: 40,
  },
  cameraIcon: {
    width: 25,
    marginHorizontal: 7,
    height: 25,
    resizeMode: 'contain',
  },
  micIcon: {
    width: 25,
    marginHorizontal: 5,
    height: 25,
    resizeMode: 'contain',
  },
  filterButton: {
    backgroundColor: Colors.marketBackMain,
    borderRadius: 50,
    height: 50,
    width: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
  },
  filterIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    tintColor: Colors.marketPlaceHome,
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    alignSelf: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 10,
  },
  leftText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  locationIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
    color: '#000',
  },
});

export default HomeHeader;

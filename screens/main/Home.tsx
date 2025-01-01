import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Categories from '../../src/features/Home/components/Categories';
import {AllCategories, ServiceTabs} from '../../src/constants';
import Services from '../../src/features/Home/components/Services';
import {HomeTabIcons} from '../../src/assets/HomeTabIcons';
import {commonIcons} from '../../src/assets/commonIcons';
import ForSale from '../home/ForSale';
import ForJob from '../home/ForJobs';
import ForRent from '../home/ForRent';
import HomeHeader from '../../components/HomeHeader';
import ForServices from '../home/ForServices';
import SideWindow from '../../components/SideWindow';
import {fetchHomeProducts} from '../../src/api/home.service';
import {log} from 'sonarqube-scanner/build/src/logging';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../src/redux/thunks/login';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 10,
    width: '80%',
    height: 45,
    // alignSelf: 'center',
    backgroundColor: Colors.white,
    marginVertical: 20,
  },
  tabsContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.marketPlacePrimary,
    paddingBottom: 8,
  },
  profileImage: {
    width: 35,
    height: 35,
    marginRight: 20,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 8,
    color: '#767171',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  cameraIcon: {
    marginLeft: 8,
    color: '#767171',
  },
  micIcon: {
    marginLeft: 8,
  },
});

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const Home: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const [selectedCategory, setCategory] = useState(AllCategories.Cosmetics);
  const [selectedService, setService] = useState(ServiceTabs.ForSale);

  const [data, setData] = useState();
  const dispatch = useDispatch();

  const onCategoryChange = (tab: AllCategories) => {
    setCategory(tab);
  };

  const onServiceChange = (tab: ServiceTabs) => {
    setService(tab);
  };

  // useEffect(async () => {
  //   if (selectedService == ServiceTabs.ForSale) {
  //     const res = await fetchHomeProducts();
  //     setData(res.data);
  //   }
  // }, [selectedService]);

  // console.log(ServiceTabs);
  useEffect(() => {
    const login = async () => {
      const result = await dispatch(
        loginUser({
          email: 'qdev@yopmail.com',
          password: 'Test@123',
        }),
      );

      if (loginUser.fulfilled.match(result)) {
        console.log('Login successful:');
      } else {
        console.error('Login failed:', result.payload);
      }
    };

    login();
  }, [dispatch]);

  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.marketPlacePrimary}} />
      <ScrollView>
        <HomeHeader />
        {/* <Categories
          selectedTab={selectedCategory} 
          onPressTab={onCategoryChange}
        /> */}
        {/* <SideWindow></SideWindow> */}

        <Services
          onServiceClick={onServiceChange}
          selectedTab={selectedService}
        />

        {selectedService == ServiceTabs.ForSale && (
          <ForSale navigation={navigation} data={[]} />
        )}

        {selectedService == ServiceTabs.Services && (
          <ForServices navigation={navigation} />
        )}

        {selectedService == ServiceTabs.ForRent && (
          <ForRent navigation={navigation} />
        )}

        {selectedService == ServiceTabs.Jobs && (
          <ForJob navigation={navigation} />
        )}
      </ScrollView>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonIcons } from '../../src/assets/commonIcons';
import Checklist from '../../components/CheckList';

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const DefineInterst: React.FC<{ navigation: NavigationProps }> = ({
  navigation,
}) => {
  
  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Get notified first on discounts </Text>
          <View style={styles.subtitleContainer}>
            <Text style={styles.title}> and promos?</Text>
            <Image
              source={commonIcons.frame}
              style={styles.frameIcon}
            />
          </View>

          <Text style={styles.subtitle}>
            Select product type of interest below
          </Text>
          <View style={styles.centered}>
            <TouchableOpacity style={styles.seeHowButton}>
              <Text style={styles.seeHowText}>See how It works</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoryHeaderContainer}>
          <Text style={styles.categoryHeader}>Select Product Categories</Text>
          <Text style={styles.categorySubtitle}>
            Select as many as you want
          </Text>
        </View>
        <View style={styles.categoryContent}>
          <Checklist />
          <View style={styles.centered}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => navigation.navigate('my-interst')}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    paddingHorizontal: 20,
    lineHeight: 25,
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 40,
    fontWeight: '400',
    fontSize: 14,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeHowButton: {
    backgroundColor: '#4E4D4D',
    padding: 5,
    borderRadius: 10,
  },
  seeHowText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  categoryHeaderContainer: {
    backgroundColor: '#F4D96BC2',
    marginTop: 50,
    paddingVertical: 10,
  },
  categoryHeader: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  categorySubtitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 10,
    color: '#504F4F',
  },
  categoryContent: {
    backgroundColor: '#FCDD629E',
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  categoryText: {
    fontSize: 16,
    color: '#000',
  },
  subCategories: {
    backgroundColor: '#fcf8e3',
    marginLeft: 20,
    paddingVertical: 5,
  },
  saveButton: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 10,
  },
  saveText: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    paddingHorizontal: 20,
  },
  frameIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default DefineInterst;

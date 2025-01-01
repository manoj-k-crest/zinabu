import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../src/styles/colors';
import {commonIcons} from '../../src/assets/commonIcons';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
  },
  header: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  innerContainerText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
    color: 'black',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  plus: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '300',
  },
  innerContainerImage: {
    width: 150,
    height: 150,
    marginBottom: 50,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  headerImage: {width: 50, height: 50},
});

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const CreateInterst: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Define interest</Text>
          <Image source={commonIcons.cross} style={styles.headerImage} />
        </View>
        <View style={styles.innerContainer}>
          <Image
            source={commonIcons.interest}
            style={styles.innerContainerImage}
          />
          <Text style={styles.innerContainerText}>
            I am your AI assistant, I can help you define your interest very
            fast. Just Click plus icon to start
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('define-interst')}>
            <LinearGradient
              colors={['#ea8476', '#efb927']}
              style={styles.circle}>
              <Text style={styles.plus}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CreateInterst;

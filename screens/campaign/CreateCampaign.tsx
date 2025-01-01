import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';
import LinearGradient from 'react-native-linear-gradient';
import LinearBorderColorView from '../../components/LinearBorderColorView';

interface NavigationProps {
  goBack: any;
  navigate: (screen: string, params?: object) => void;
}

const CreateCampaign: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <LinearGradient
            colors={['#F522A1', '#ECA61B']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.crossIconContainer}>
            <TouchableOpacity
              style={styles.crossInnerContainer}
              onPress={() => navigation.goBack()}>
              <Image source={commonIcons.cross} style={styles.headerImage} />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.flexRow}>
          <LinearBorderColorView title="Create a campaign" />
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
            onPress={() => navigation.navigate('campaignObjective')}>
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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  header: {
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  crossIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    opacity: 0.7,
  },
  crossInnerContainer: {
    borderRadius: 5,
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  innerContainerText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 60,
    color: 'black',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
    width: 100,
    height: 100,
    marginVertical: 50,
    resizeMode: 'contain',
  },
  headerImage: {
    width: 50,
    height: 50,
  },
});

export default CreateCampaign;

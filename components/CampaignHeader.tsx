import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {commonIcons} from '../src/assets/commonIcons';
import LinearBorderColorView from './LinearBorderColorView';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProps} from '../src/constants/types';
import {playTTS} from '../ttsListeners';

interface CampaignHeaderProps {
  navigation: NavigationProps;
  description: string;
  title: string;
}

export default function CampaignHeader({
  navigation,
  description,
  title,
  onArrowPress,
}: CampaignHeaderProps) {
  const styles = StyleSheet.create({
    header: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerTitle: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
      opacity: 0,
      marginTop: 20,
    },
    headerImageContainer: {
      width: 45,
      height: 45,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F1C40F',
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerDesc: {
      alignSelf: 'center',
      marginVertical: 10,
    },
  });

  const handleAudio = () => {
    playTTS(title);
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            onArrowPress();
          }}
          style={styles.headerImageContainer}>
          <Image
            source={commonIcons.backButton}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.flexRow}>
        <LinearBorderColorView title={title} />
        <Icon
          name="volume-high-outline"
          size={20}
          color="#EF1C69"
          onPress={() => handleAudio()}
          style={{marginLeft: 10}}
        />
      </View>

      <Text style={styles.headerDesc}>{description}</Text>
    </>
  );
}

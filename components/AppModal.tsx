import React, {ReactNode, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {HEIGHT, WIDTH} from '../src/constants';
import Modal from 'react-native-modal';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  modalStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

const AppModal: React.FC<AppModalProps> = ({
  visible,
  onClose,
  title,
  children,
  modalStyle,
  titleStyle,
  contentStyle,
}) => {
  const [modal, setModal] = useState(false);
  return (
    <Modal
      hasBackdrop
      backdropOpacity={0.2}
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, modalStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <View style={[styles.content, contentStyle]}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    // height: HEIGHT,
    // width: WIDTH + 10000,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    // borderWidth: 1,
    // alignSelf:'flex-end'
  },
  modalContainer: {
    height: HEIGHT,
    width: WIDTH -100,
    backgroundColor: '#FBF7E8',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
     alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    // marginBottom: 20,
  },
  closeButton: {
    // alignSelf: 'center',
    // backgroundColor: '#007BFF',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 5,
  },
  closeButtonText: {
    // color: 'white',
    // fontSize: 16,
  },
});

export default AppModal;

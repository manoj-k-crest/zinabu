import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../src/styles/colors";
import { AuthIcons } from "../../../src/assets/AuthIcons";
import { commonIcons } from "../../../src/assets/commonIcons";
import { launchCamera } from "react-native-image-picker";
import DocumentPicker from "react-native-document-picker";

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const AddMedia: React.FC<{ navigation: NavigationProps }> = ({
  navigation,
}) => {
  const handleSelectFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // Allows all file types
      });
      console.log("Selected File:", result[0].uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User canceled the picker");
      } else {
        console.error(err);
      }
    }
  };

  const handleTakePhoto = async () => {
    const options = {
      mediaType: "photo",
      cameraType: "back",
    };

    // launchCamera(options, (response) => {
    //   if (response.didCancel) {
    //     console.log("User canceled the camera");
    //   } else if (response.errorCode) {
    //     console.error("Camera Error: ", response.errorMessage);
    //   } else {
    //     console.log("Photo URI:", response.assets[0].uri);
    //   }
    // });
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={commonIcons.appLogo} style={styles.appLogo} />
        </View>

        <Text style={styles.title}>Register your business</Text>
        <Text style={styles.subtitle}>Upload a photo of your product</Text>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.fileBox} onPress={handleSelectFile}>
          <Text style={styles.text}>Select file</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Take a photo</Text>
        </TouchableOpacity>
      </View>
      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f4f5",
    paddingHorizontal: 25,
  },
  header: {
    marginBottom: 50,
    alignItems: "center",
  },
  appLogo: {
    width: 100,
    height: 100,
    backgroundColor: Colors.marketPlacePrimary,
    borderRadius: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "black",
    fontWeight: 500,
    // textAlign: "center",
    marginVertical: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#FFD700",
    borderRadius: 25,
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 12,
    color: "#828A89",
  },
  forgotPassword: {
    fontSize: 12,
    fontWeight: 600,
    color: Colors.lightYellow,
  },
  signInButton: {
    width: "100%",
    height: 57,
    backgroundColor: "#FFD700",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.black,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#000",
  },

  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
  },
  socialButton: {
    width: 175,
    height: 57,
    backgroundColor: "#FFF",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    width: 16,
    height: 16,
  },
  signUpText: {
    fontSize: 14,
    color: Colors.black,
  },
  signUpLink: {
    color: Colors.marketPlacePrimary,
    fontWeight: "bold",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    justifyContent: "center",
  },
  categoryCard: {
    alignItems: "center",
    margin: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 8,
    backgroundColor: "#FFFFFF",
  },
  selectedCard: {
    borderColor: "#FFD700", // Yellow border for selected category
    borderWidth: 2,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    width: "90%",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  fileBox: {
    width: 400,
    height: 200,
    borderWidth: 2,
    borderColor: "#FFD700",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  orText: {
    fontSize: 14,
    color: "#888",
    marginVertical: 10,
  },
  button: {
    borderColor: "#FFD700",
    borderWidth: 2,
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default AddMedia;

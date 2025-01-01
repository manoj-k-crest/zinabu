import React, { useState } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../src/styles/colors";
import { commonIcons } from "../../src/assets/commonIcons";

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const OtpVerification: React.FC<{ navigation: NavigationProps }> = ({
  navigation,
}) => {
  const [email, setEmail] = useState("");
  const nextInputRef: (TextInput | null)[] = [];

  const [otp, setOtp] = useState(["", "", "", ""]); // State for OTP

  const handleInputChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;

    if (text && index < 3) {
      nextInputRef[index + 1].focus(); // Move focus to next input
    }

    setOtp(updatedOtp);
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Image
              source={commonIcons.backButton}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>

          <Image source={commonIcons.appLogo} style={styles.appLogo} />

          <Text style={{ opacity: 0 }}>LOGO</Text>
        </View>

        <Text style={styles.title}>Forgot password </Text>
        <Text style={styles.subtitle}>Verify your OTP</Text>

        <View style={styles.childContainer}>
          <Text style={styles.label}>OTP Code</Text>
          <View style={styles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={(ref) => (nextInputRef[index] = ref)}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                value={value}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginVertical: 20,
            alignSelf: "flex-end", // Aligns the button to the right
          }}
        >
          <Text style={styles.resendOtp}>Resent Otp</Text>
        </TouchableOpacity>

        <View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
    paddingHorizontal: 25,
  },
  header: {
    display: "flex",
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: Colors.white,
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
    fontSize: 16,
    color: "#6C757D",
    fontWeight: 400,
    textAlign: "center",
    marginBottom: 30,
  },
  childContainer: {
    marginTop: 50,
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
    color: "#333",
    fontWeight: "bold",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  input: {
    width: 70,
    height: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
    marginHorizontal: 15,
  },

  continueButton: {
    width: "100%",
    height: 57,
    backgroundColor: "#FFD700",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.black,
  },
  resendOtp: {
    fontSize: 12,
    fontWeight: 600,
    color: Colors.lightYellow,
  },
});

export default OtpVerification;

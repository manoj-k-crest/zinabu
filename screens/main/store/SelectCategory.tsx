import React from "react";

import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "../../../src/styles/colors";
import { commonIcons } from "../../../src/assets/commonIcons";

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

interface Category {
  id: string;
  image: string;
  label: string;
}

const SelectCategory: React.FC<{ navigation: NavigationProps }> = ({
  navigation,
}) => {
  const categories = [
    {
      id: 1,
      label: "Face Care",
      image:
        "https://s3-alpha-sig.figma.com/img/6a72/f0aa/0e956df4567df4335536261d1759c334?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5vP-ky0hTAq1nNfvGgwI~90Z2nMHFE4Oa0JvAzo8Bfr4Jca-Y~cN5NnyOFyn5FfPPiuFBY6UNcLRK2gTcqqZ9NGTP3mcVcFOSihuParGO5lfPzsHw~mnti46VvtXw2-D~EdiGoDkltlzlLSAT3JpOiTmz70xtt5mi7DXNW3MCjhypV5hGzxFZJNcs3ZsoYe9~OEUFstv6Gp4PqtXKzLgENya6rsr0F4f3odTPy0dCqcVT8fR11Uzeu2Zb71pr9uZXi~RYMV62vXvkT2fX8upFhD-PC3VB0LG5B~lwW8cQQY63CSTnzM3i3UoZchNzBVycKUYMyo-XQpwaRRTUW7tA__",
    },
    {
      id: 2,
      label: "Eyes Care",
      image:
        "https://s3-alpha-sig.figma.com/img/7521/60a0/8ab462e13d938a60c9853fba6c48e99d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKW7DiVJ~wb-J85I3EBRdgl7YYJKYukYkLMSAYzLqK646gcl4xnOnO7LmWPBWx1pxqBp5k7rhO4qAhgQ5XK0zCgWv03uA5Nr1KxDkrLN18liGcP-W9dtuWo2EZ3vCqSExZGHKmmNmCfaodkDqJhn1lQ9rutYC-z9IXh6hPZ1p-Wt7FFYVlLKxKpgV53rL6Krm54GTPDcwjfgnIqk5QcOtvjZTKuoxyeGCWhC0ypNtIDyVoVJNkQ7l4YXtVtPEVeGeywkZwOA5MGk27-3Kyf0ghdHZ4qRl0vwX1g6f4Walmqk59cqrB-qLkDJMj8MUFPZav~tTGbl959nWSFuC21JNQ__",
    },
    {
      id: 2,
      label: "Eyes Care",
      image:
        "https://s3-alpha-sig.figma.com/img/7521/60a0/8ab462e13d938a60c9853fba6c48e99d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKW7DiVJ~wb-J85I3EBRdgl7YYJKYukYkLMSAYzLqK646gcl4xnOnO7LmWPBWx1pxqBp5k7rhO4qAhgQ5XK0zCgWv03uA5Nr1KxDkrLN18liGcP-W9dtuWo2EZ3vCqSExZGHKmmNmCfaodkDqJhn1lQ9rutYC-z9IXh6hPZ1p-Wt7FFYVlLKxKpgV53rL6Krm54GTPDcwjfgnIqk5QcOtvjZTKuoxyeGCWhC0ypNtIDyVoVJNkQ7l4YXtVtPEVeGeywkZwOA5MGk27-3Kyf0ghdHZ4qRl0vwX1g6f4Walmqk59cqrB-qLkDJMj8MUFPZav~tTGbl959nWSFuC21JNQ__",
    },
    {
      id: 3,
      label: "Skin Care",
      image:
        "https://s3-alpha-sig.figma.com/img/8511/4728/ed63974d7880cbf27f7d0efb343dd396?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KnwQOR0n6ufCX0qCKtnngFLuoSWiOGNaZC9BT2BuOdY6KDpEQDR3X1yLeNJEqVrpfkydEo4I-ZPdHT4jRyIabZIoPFb3xAwSMeKs1S3lGPwS8AYEpGVD6h4~yEyt17N8P9g8Scjqq8Ti5elHLMWSAV4-ZLcRkEurWfhvA3Y9JLPc23~KMqYDUr2ARL~aspV82E4hdDbMtAM3GGfL0HyTPLaVmVUkPP6KvmeFxIt3PqzK6aud-geZOLsIki2aFz3T43BP85kb4sVt82iKF3KrQeRlK2JjbK~8WeIbZrGHqn7Zt1kVNdypa7v3OT4DiIMxAPZGvPOwMXWIgwG9843kGg__",
    },
    {
      id: 4,
      label: "Hair Care",
      image:
        "https://s3-alpha-sig.figma.com/img/6f1b/e3c2/5b916566957349886e5829e365afc463?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVQVnOB2qQqEZiaZczJWxCgNVZms-KArMLf~FBcxZp444ppCcL4cEYhC7p9UtM4WtVEHUQKjAgNANl9LOnBea7jj2360WJqGbiIC9nkwkNxPjObrCWfoddR9gk4PeJS7AGii4V8Zl6q5YTKGE8xtpJ-Vi6j8jqBqlnnzWL3SiiI0nXt-t1553jhB9M3b~2TqHxj3npYVeAeS5jxOUP4m1JPDuwmLNFmjl~7C4cfaq5-9FWJP92ZCZoON~bzRnuQKPEiYeOv7~Fdk6X5JR~7D~92Y4bbORo9fk0TAFiEuI-ep8aC9y0TBk7RttHTfagaWHZl7osRgcflmHs1lzda74Q__",
    },
    {
      id: 2,
      label: "Eyes Care",
      image:
        "https://s3-alpha-sig.figma.com/img/7521/60a0/8ab462e13d938a60c9853fba6c48e99d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKW7DiVJ~wb-J85I3EBRdgl7YYJKYukYkLMSAYzLqK646gcl4xnOnO7LmWPBWx1pxqBp5k7rhO4qAhgQ5XK0zCgWv03uA5Nr1KxDkrLN18liGcP-W9dtuWo2EZ3vCqSExZGHKmmNmCfaodkDqJhn1lQ9rutYC-z9IXh6hPZ1p-Wt7FFYVlLKxKpgV53rL6Krm54GTPDcwjfgnIqk5QcOtvjZTKuoxyeGCWhC0ypNtIDyVoVJNkQ7l4YXtVtPEVeGeywkZwOA5MGk27-3Kyf0ghdHZ4qRl0vwX1g6f4Walmqk59cqrB-qLkDJMj8MUFPZav~tTGbl959nWSFuC21JNQ__",
    },
    {
      id: 1,
      label: "Face Care",
      image:
        "https://s3-alpha-sig.figma.com/img/6a72/f0aa/0e956df4567df4335536261d1759c334?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5vP-ky0hTAq1nNfvGgwI~90Z2nMHFE4Oa0JvAzo8Bfr4Jca-Y~cN5NnyOFyn5FfPPiuFBY6UNcLRK2gTcqqZ9NGTP3mcVcFOSihuParGO5lfPzsHw~mnti46VvtXw2-D~EdiGoDkltlzlLSAT3JpOiTmz70xtt5mi7DXNW3MCjhypV5hGzxFZJNcs3ZsoYe9~OEUFstv6Gp4PqtXKzLgENya6rsr0F4f3odTPy0dCqcVT8fR11Uzeu2Zb71pr9uZXi~RYMV62vXvkT2fX8upFhD-PC3VB0LG5B~lwW8cQQY63CSTnzM3i3UoZchNzBVycKUYMyo-XQpwaRRTUW7tA__",
    },
    {
      id: 2,
      label: "Eyes Care",
      image:
        "https://s3-alpha-sig.figma.com/img/7521/60a0/8ab462e13d938a60c9853fba6c48e99d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKW7DiVJ~wb-J85I3EBRdgl7YYJKYukYkLMSAYzLqK646gcl4xnOnO7LmWPBWx1pxqBp5k7rhO4qAhgQ5XK0zCgWv03uA5Nr1KxDkrLN18liGcP-W9dtuWo2EZ3vCqSExZGHKmmNmCfaodkDqJhn1lQ9rutYC-z9IXh6hPZ1p-Wt7FFYVlLKxKpgV53rL6Krm54GTPDcwjfgnIqk5QcOtvjZTKuoxyeGCWhC0ypNtIDyVoVJNkQ7l4YXtVtPEVeGeywkZwOA5MGk27-3Kyf0ghdHZ4qRl0vwX1g6f4Walmqk59cqrB-qLkDJMj8MUFPZav~tTGbl959nWSFuC21JNQ__",
    },
    {
      id: 1,
      label: "Face Care",
      image:
        "https://s3-alpha-sig.figma.com/img/6a72/f0aa/0e956df4567df4335536261d1759c334?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5vP-ky0hTAq1nNfvGgwI~90Z2nMHFE4Oa0JvAzo8Bfr4Jca-Y~cN5NnyOFyn5FfPPiuFBY6UNcLRK2gTcqqZ9NGTP3mcVcFOSihuParGO5lfPzsHw~mnti46VvtXw2-D~EdiGoDkltlzlLSAT3JpOiTmz70xtt5mi7DXNW3MCjhypV5hGzxFZJNcs3ZsoYe9~OEUFstv6Gp4PqtXKzLgENya6rsr0F4f3odTPy0dCqcVT8fR11Uzeu2Zb71pr9uZXi~RYMV62vXvkT2fX8upFhD-PC3VB0LG5B~lwW8cQQY63CSTnzM3i3UoZchNzBVycKUYMyo-XQpwaRRTUW7tA__",
    },
    {
      id: 2,
      label: "Eyes Care",
      image:
        "https://s3-alpha-sig.figma.com/img/7521/60a0/8ab462e13d938a60c9853fba6c48e99d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKW7DiVJ~wb-J85I3EBRdgl7YYJKYukYkLMSAYzLqK646gcl4xnOnO7LmWPBWx1pxqBp5k7rhO4qAhgQ5XK0zCgWv03uA5Nr1KxDkrLN18liGcP-W9dtuWo2EZ3vCqSExZGHKmmNmCfaodkDqJhn1lQ9rutYC-z9IXh6hPZ1p-Wt7FFYVlLKxKpgV53rL6Krm54GTPDcwjfgnIqk5QcOtvjZTKuoxyeGCWhC0ypNtIDyVoVJNkQ7l4YXtVtPEVeGeywkZwOA5MGk27-3Kyf0ghdHZ4qRl0vwX1g6f4Walmqk59cqrB-qLkDJMj8MUFPZav~tTGbl959nWSFuC21JNQ__",
    },
    {
      id: 5,
      label: "Body Care",
      image:
        "https://s3-alpha-sig.figma.com/img/cf37/9af4/2217c78e22b5c663a1a1548841b8bfcf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkKP7thFEq3uS7qxzDDb4eG5s3tAsT5cdpjr6aP6UUvh2-cvtAKdUei70saYUJ~BNMzUlulYSpfmA0kHpvsb4K5yUEFa31UPgId~UzJ7gZG3MtwkPn-Q3P5MX5rV0QM8yedhhtC~s7Br~DWYLN-NcF6wExqFR8Zi1uY42zxoVLl61QFu3RQ4h6bMn7grCr2sgShIUZ-2FZbi-vMfitcoidKFvdbwHGcIX3J91a7hH9VQcuLS-yc51Vff9rSrTrHSux51eYkUnbYeYPkCF8SsMBQoEUzFnymg36crDDtXum1qTuMCEqfiQjkNdk6NNvzpQhi8Bmc~l0QYjfeXL0dxvQ__",
    },
    {
      id: 2,
      label: "Eyes Care",
      image:
        "https://s3-alpha-sig.figma.com/img/7521/60a0/8ab462e13d938a60c9853fba6c48e99d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKW7DiVJ~wb-J85I3EBRdgl7YYJKYukYkLMSAYzLqK646gcl4xnOnO7LmWPBWx1pxqBp5k7rhO4qAhgQ5XK0zCgWv03uA5Nr1KxDkrLN18liGcP-W9dtuWo2EZ3vCqSExZGHKmmNmCfaodkDqJhn1lQ9rutYC-z9IXh6hPZ1p-Wt7FFYVlLKxKpgV53rL6Krm54GTPDcwjfgnIqk5QcOtvjZTKuoxyeGCWhC0ypNtIDyVoVJNkQ7l4YXtVtPEVeGeywkZwOA5MGk27-3Kyf0ghdHZ4qRl0vwX1g6f4Walmqk59cqrB-qLkDJMj8MUFPZav~tTGbl959nWSFuC21JNQ__",
    },
    {
      id: 6,
      label: "Body Care",
      image:
        "https://s3-alpha-sig.figma.com/img/cf37/9af4/2217c78e22b5c663a1a1548841b8bfcf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IkKP7thFEq3uS7qxzDDb4eG5s3tAsT5cdpjr6aP6UUvh2-cvtAKdUei70saYUJ~BNMzUlulYSpfmA0kHpvsb4K5yUEFa31UPgId~UzJ7gZG3MtwkPn-Q3P5MX5rV0QM8yedhhtC~s7Br~DWYLN-NcF6wExqFR8Zi1uY42zxoVLl61QFu3RQ4h6bMn7grCr2sgShIUZ-2FZbi-vMfitcoidKFvdbwHGcIX3J91a7hH9VQcuLS-yc51Vff9rSrTrHSux51eYkUnbYeYPkCF8SsMBQoEUzFnymg36crDDtXum1qTuMCEqfiQjkNdk6NNvzpQhi8Bmc~l0QYjfeXL0dxvQ__",
    },
  ];

  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity style={[styles.categoryCard]}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View
          style={{
            ...styles.container,
            backgroundColor: "#F8F8F8",
            paddingHorizontal: 10,
            marginBottom: 20,
          }}
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.backButton}>
                <Image
                  source={commonIcons.backButton}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>

              <Image source={commonIcons.appLogo} style={styles.appLogo} />
              <Text style={{ opacity: 0 }}>LOGO</Text>
            </View>
            {/* <View style={styles.header}>
              <Image source={commonIcons.appLogo} style={styles.appLogo} />
            </View> */}

            <Text style={styles.title}>Register your business</Text>
            <Text style={styles.subtitle}>Select your business category</Text>
          </View>
          <View>
            <FlatList
              data={[...categories, ...categories]}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id.toString()}
              numColumns={5} // Number of items per row
              contentContainerStyle={styles.grid}
            />

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() =>
                navigation.navigate("AddShops", {
                  screen: "AddMedia",
                })
              }
            >
              <Text style={{ fontWeight: 600, fontSize: 18 }}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
  inputContainer: {
    flexDirection: "column",
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 69,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  passwordInputParent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    marginLeft: 10,
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
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
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
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#000",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 10,
    fontWeight: 600,
    color: Colors.lightYellow,
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
    // borderWidth: 1,
    // borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 8,
    // backgroundColor: "#FFFFFF",
  },
  selectedCard: {
    borderColor: "#FFD700", // Yellow border for selected category
    borderWidth: 2,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "white",
  },
  categoryLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default SelectCategory;

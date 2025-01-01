import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/Ionicons";
import { commonIcons } from "../../../src/assets/commonIcons";

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const SelectLocation: React.FC<{ navigation: NavigationProps }> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {/* Map Section */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
          pinColor="blue"
        />
      </MapView>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          navigation.navigate("AddShops", {
            screen: "addDetails",
          })
        }
      >
        <Image
          source={commonIcons.backButton}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>

      <View style={styles.overlay}>
        <View style={styles.searchContainer}>
          <Icon
            name="search-outline"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchInput} />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Icon
            name="location"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <Text>Set your current location</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  map: {
    flex: 0.8,
  },
  overlay: {
    flex: 0.5,
    bottom: 30,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: 500,
    elevation: 10,
  },
  backButton: {
    position: "absolute",
    top: 90,
    left: 35,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    borderColor: "Black",
    borderRadius: 25,
    padding: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "black",
    borderBlockColor: "black",
  },
});

export default SelectLocation;

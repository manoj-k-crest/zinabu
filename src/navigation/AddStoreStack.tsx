import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddStore from "../../screens/main/store/AddStore";
import SelectLocation from "../../screens/main/store/SelectLocation";
import SelectCategory from "../../screens/main/store/SelectCategory";
import AddMedia from "../../screens/main/store/AddMedia";

export default function AddStoreStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="addDetails">
      <Stack.Screen
        name="addDetails"
        options={{ headerShown: false }}
        component={AddStore}
      />
      <Stack.Screen
        name="EditLocation"
        options={{ headerShown: false }}
        component={SelectLocation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SelectCategory"
        component={SelectCategory}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AddMedia"
        component={AddMedia}
      />
    </Stack.Navigator>
  );
}

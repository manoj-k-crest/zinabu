import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddStore from '../../screens/main/store/AddStore';
import SelectLocation from '../../screens/main/store/SelectLocation';
import SelectCategory from '../../screens/main/store/SelectCategory';
import AddMedia from '../../screens/main/store/AddMedia';
import SelectInterst from '../../screens/interest/DefineInterst';
import MyInterst from '../../screens/interest/MyInterst';
import ServiceLocation from '../../screens/main/store/ServiceLocation';
import ServiceCategory from '../../screens/main/store/ServiceCategory';
import Serviceoffer from '../../screens/main/store/ServiceOffer';
import ServiceStoreInfo from '../../screens/main/store/ServiceStoreInfo';
import ServiceStoreImage from '../../screens/main/store/ServiceStoreImage';
import ServiceBusinessType from '../../screens/main/store/ServiceBusinessType';
import ZinabuSubscription from '../../screens/main/store/ZinabuSubscription';
import CreateInterst from '../../screens/interest/CreateInterst';
import DefineInterst from '../../screens/interest/DefineInterst';
import ZinabuPlace from '../../screens/main/store/ZinabuPlans';

export default function InitialInformation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="create-interst">
      <Stack.Screen
        name="create-interst"
        options={{headerShown: false}}
        component={CreateInterst}
      />

      <Stack.Screen
        name="define-interst"
        options={{headerShown: false}}
        component={DefineInterst}
      />

      <Stack.Screen
        name="my-interst"
        options={{headerShown: false}}
        component={MyInterst}
      />

      <Stack.Screen
        name="service-offer"
        options={{headerShown: false}}
        component={Serviceoffer}
      />

      <Stack.Screen
        name="service-location"
        options={{headerShown: false}}
        component={ServiceLocation}
      />

      <Stack.Screen
        name="service-info"
        options={{headerShown: false}}
        component={ServiceStoreInfo}
      />

      <Stack.Screen
        name="service-image"
        options={{headerShown: false}}
        component={ServiceStoreImage}
      />

      <Stack.Screen
        name="service-category"
        options={{headerShown: false}}
        component={ServiceCategory}
      />

      <Stack.Screen
        name="service-business-type"
        options={{headerShown: false}}
        component={ServiceBusinessType}
      />
      <Stack.Screen
        name="Zinabu-subscription"
        options={{headerShown: false}}
        component={ZinabuSubscription}
      />
      <Stack.Screen
        name="Zinabu-plans"
        options={{headerShown: false}}
        component={ZinabuPlace}
      />
    </Stack.Navigator>
  );
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddStore from '../../screens/main/store/AddStore';
import SelectLocation from '../../screens/main/store/SelectLocation';
import SelectCategory from '../../screens/main/store/SelectCategory';
import AddMedia from '../../screens/main/store/AddMedia';
import CreateCampaign from '../../screens/campaign/CreateCampaign';
import CreateObjective from '../../screens/campaign/CampaignObjective';
import CampaignTargetGroup from '../../screens/campaign/CampaignTargetGroup';
import CampaignGoals from '../../screens/campaign/CampaignGoals';
import CanpaignContent from '../../screens/campaign/CanpaignContent';
import TargetScreens from '../../screens/campaign/TargetScreens';
import CampaignNotification from '../../screens/campaign/CampaignNotification';
import CampaignItemAppearance from '../../screens/campaign/CampaignItemAppearance';
import CampaignDuration from '../../screens/campaign/CampaignDuration';
import CampaignPreview from '../../screens/campaign/CampaignPreview';
import Drawer from '../../screens/campaign/Drawer';
import MyCampaigns from '../../screens/campaign/MyCampaigns';

export default function AddCampaign() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="createCampaign"
        options={{headerShown: false}}
        component={CreateCampaign}
      />
      <Stack.Screen
        name="campaignObjective"
        options={{headerShown: false}}
        component={Drawer}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="campaignGoals"
        component={CampaignGoals}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="campaignTargetGroup"
        component={CampaignTargetGroup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CanpaignContent"
        component={CanpaignContent}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TargetScreens"
        component={TargetScreens}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CampaignNotification"
        component={CampaignNotification}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CampaignItemAppearance"
        component={CampaignItemAppearance}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CampaignDuration"
        component={CampaignDuration}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CampaignPreview"
        component={CampaignPreview}
      />
    </Stack.Navigator>
  );
}

import React, {Component, createRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {DrawerLayout} from 'react-native-gesture-handler';
import CreateCampaign from './CreateCampaign';
import CampaignTargetGroup from './CampaignTargetGroup';
import CampaignGoals from './CampaignGoals';
import CanpaignContent from './CanpaignContent';
import TargetScreens from './TargetScreens';
import CampaignNotification from './CampaignNotification';
import CampaignItemAppearance from './CampaignItemAppearance';
import CampaignDuration from './CampaignDuration';
import CampaignPreview from './CampaignPreview';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import CreateObjective from './CampaignObjective';

class Drawerable extends Component {
  drawerRef = createRef();

  // State to keep track of selected menu item
  state = {
    selectedItem: 'Objective',
  };

  handleOpenDrawer = () => {
    if (this.drawerRef.current) {
      this.drawerRef.current.openDrawer();
    }
  };

  handleCloseDrawer = () => {
    if (this.drawerRef.current) {
      this.drawerRef.current.closeDrawer();
    }
  };

  handleDrawerSlide = progress => {
    console.log('Drawer slide progress:', progress);
  };

  // Handle menu item click and set selected item
  handleMenuItemClick = item => {
    this.setState({selectedItem: item});
    this.handleCloseDrawer(); // Close the drawer when an item is selected
  };

  renderDrawer = () => {
    return (
      <LinearGradient
        colors={['#f9a825', '#f06292']}
        style={styles.drawerContainer}>
        <View style={{paddingVertical: 20}}>
          <TouchableOpacity
            onPress={this.handleCloseDrawer}
            style={styles.headerImageContainer}>
            <Icon name="arrow-forward-outline" size={20} color="white" />
          </TouchableOpacity>
          {[
            'Objective',
            'Goals',
            'Target Group',
            'Content',
            'Target Screens',
            'Appearance',
            'Duration',
            'Notification',
            'Post',
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                this.state.selectedItem === item && styles.activeMenuItem, // Highlight the selected item
              ]}
              onPress={() => this.handleMenuItemClick(item)}>
              {this.state.selectedItem === item && (
                <Icon
                  name="create-outline"
                  size={20}
                  color="#EF1C69"
                  style={{marginLeft: 10}}
                />
              )}
              <Text
                style={[styles.menuText, index === 0 && styles.activeMenuText]}>
                {'  '}
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
    );
  };

  renderContent = () => {
    switch (this.state.selectedItem) {
      case 'Objective':
        return <CreateObjective onArrowPress={this.handleOpenDrawer} />;
      case 'Goals':
        return <CampaignGoals onArrowPress={this.handleOpenDrawer} />;
      case 'Target Group':
        return <CampaignTargetGroup onArrowPress={this.handleOpenDrawer} />;
      case 'Content':
        return <CanpaignContent onArrowPress={this.handleOpenDrawer} />;
      case 'Target Screens':
        return <TargetScreens onArrowPress={this.handleOpenDrawer} />;
      case 'Appearance':
        return <CampaignItemAppearance onArrowPress={this.handleOpenDrawer} />;
      case 'Duration':
        return <CampaignDuration onArrowPress={this.handleOpenDrawer} />;
      case 'Notification':
        return <CampaignNotification onArrowPress={this.handleOpenDrawer} />;
      case 'Post':
        return <CampaignPreview onArrowPress={this.handleOpenDrawer} />;

      default:
        return <Text>Please select an item from the menu.</Text>;
    }
  };

  render() {
    return (
      <DrawerLayout
        ref={this.drawerRef}
        drawerWidth={250}
        drawerPosition="left"
        drawerType="front"
        drawerBackgroundColor="#ddd"
        renderNavigationView={this.renderDrawer}
        onDrawerSlide={this.handleDrawerSlide}>
        <>{this.renderContent()}</>
      </DrawerLayout>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    height: '100%',
    backgroundColor: '#fff',
    borderWidth: 2,
  },
  headerImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5954',
    margin: 30,
  },
  backButton: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  arrowText: {
    fontSize: 18,
    color: '#000',
  },
  menuItem: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  activeMenuItem: {
    backgroundColor: '#f06292', // Highlighted background
  },
  menuText: {
    fontSize: 20,
    fontWeight: 400,
    color: '#black',
    paddingRight: 25,
  },
  activeMenuText: {
    fontWeight: 'bold',
  },
  bottomMenuIcon: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  menuIcon: {
    fontSize: 20,
    color: '#000',
  },
  openDrawerButton: {
    marginTop: 20,
    fontSize: 18,
    color: '#1e88e5',
  },
});

export default Drawerable;

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e94560"
      inactiveColor='#5e2334'
      barStyle={{ 
        
      backgroundColor: '#12121f',
      borderTopColor: '#e94560',
      borderTopWidth: 1,
    
    }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),


        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-headline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
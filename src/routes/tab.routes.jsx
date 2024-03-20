import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import About from "../screens/About";
import Planetary from "../screens/Planetary";

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
        name="Planetary"
        component={Planetary}
        options={{
          tabBarLabel: 'Planetary',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-headline" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default TabRoutes;
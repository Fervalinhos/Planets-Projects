import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "../screens/Home";
import About from "../screens/About";
import Planetary from "../screens/Planetary";
import PlanetInfo from '../screens/PlanetInfo';

const Tab = createMaterialBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#f9f9f9"
      inactiveColor='#B5B7B7'
      barStyle={{

        backgroundColor: '#0D0D0D',
        borderTopColor: '#123C73',
        borderTopWidth: 2,

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
            <MaterialCommunityIcons name="weather-hurricane" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="PlanetInfo"
        component={PlanetInfo}

        options={{
          tabBarLabel: 'PlanetInfo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
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
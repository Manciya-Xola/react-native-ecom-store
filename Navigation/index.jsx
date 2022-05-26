import { TabActions } from '@react-navigation/routers'
import React from 'react'
import HomeScreen from "../screens/HomeScreen";
import DriversScreen from "../screens/DriversScreen";
import CircuitScreen from '../screens/CircuitScreen';
import ConstructorsScreen from "../screens/ConstructorsScreen"
import ResultsScreen from "../screens/ResultsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function NavBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name='Drivers' component={DriversScreen}
        options={{
          tabBarLabel: 'Drivers',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car-3-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name='Circuit' component={CircuitScreen}
      options={{
        tabBarLabel: 'Circuit',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="integrated-circuit-chip" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name='Constructors' component={ConstructorsScreen}
      options={{
        tabBarLabel: 'Constructors',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="keyboard-f1" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name='Results' component={ResultsScreen}
      options={{
        tabBarLabel: 'Results',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="clipboard-list-outline" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}

export default NavBar
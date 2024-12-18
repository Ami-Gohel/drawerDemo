import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/config/color';
import ContactScreen from '@/Screens/ContactScreen';
import HomeNavigator from './HomeNavigator';

type TabParamList = {
  Home: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Contact') {
            iconName = 'phone-portrait-sharp';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.bg,
        
      })}
      
    >
      <Tab.Screen name='Home' component={HomeNavigator} />
      <Tab.Screen name='Contact' component={ContactScreen} />
    </Tab.Navigator>
  );
}

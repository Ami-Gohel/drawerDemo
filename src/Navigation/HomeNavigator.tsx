import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/Screens/HomeScreen';
import WelcomeScreen from '@/Screens/WelcomeScreen';


export type HomeScreenStackParamList = {
    Home: undefined;
    WelcomeScreen: undefined;
};

const Stack = createNativeStackNavigator<HomeScreenStackParamList>();

const HomeNavigator = () => {
  const options = {
    headerShown: false,
    headerTitle: '',
    headerShadowVisible: false,
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = () => {
    const navigation= useNavigation()
    const goBack=()=>{
        navigation.goBack()
    }
  return (
      <SafeAreaView style={styles.container}>
          <Text onPress={goBack}>Welcome to the app! Go Back</Text>
      </SafeAreaView>
    
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'

  },
  wrapper: {
    padding: 16,
  },
});

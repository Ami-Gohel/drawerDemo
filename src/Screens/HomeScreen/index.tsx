import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <Text onPress={()=> navigation.navigate('WelcomeScreen')}>Go to welcome screen.</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

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

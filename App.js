import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import apiKeys from './config/keys';
import WelcomeScreen from './screens/WelcomeScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import LoadingScreen from './screens/LoadingScreen';
import Dashboard from './screens/Dashboard';

const Stack = createStackNavigator();
export default function App() {
     if (!firebase.apps.length) {
    console.log('connectedjajaja ')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name={'Loading'} component={LoadingScreen} />
      <Stack.Screen name='Home' component={WelcomeScreen} />
      <Stack.Screen name='Sign Up' component={SignUp} />
      <Stack.Screen name='Sign In' component={SignIn} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

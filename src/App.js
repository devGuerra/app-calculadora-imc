import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';
import HistoryScreen from './pages/History';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
            elevation: 0,
          },
          headerTintColor: '#1CB57B',
          headerTitleStyle: {
            fontWeight: '400',
            fontFamily: 'Roboto',
          },
          headerTitleAlign: 'center',
          headerRight: () => {},
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'CALCULADORA IMC',
          }}
        />
        <Stack.Screen
          name="History"
          component={HistoryScreen}
          options={{
            headerTitle: 'Historico',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

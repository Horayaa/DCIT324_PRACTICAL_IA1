// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DetailsScreen from './screens/DetailsScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: 'Campus News' }}
      />
      <HomeStack.Screen
        name="NewsDetails"
        component={DetailsScreen}
        options={{ title: 'News Details' }}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeTab"
          component={HomeStackScreen}
          options={{ headerShown: false, title: 'Home' }}
        />
        <Tab.Screen
          name="AboutTab"
          component={AboutScreen}
          options={{ title: 'About' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
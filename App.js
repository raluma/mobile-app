import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./pages/HomeScreen";
import SettingsScreen from "./pages/SettingsScreen";
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return <Icon name={ route.name === "Home" ? "home" : "gear" } type="font-awesome" color="black" />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
        />

        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../pages/HomeScreen";
import FavsScreen from "../pages/FavsScreen";
import SettingsScreen from "../pages/SettingsScreen";
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return <Icon name={ 
              route.name === "Home" ? "home" 
              : route.name === "Favs" ? "heart"
              : "gear" } type="font-awesome" color="black" />;
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
          name="Favs" 
          component={FavsScreen}
          options={{ tabBarBadge: "!" }}
        />

        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ tabBarBadge: "!" }} 
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

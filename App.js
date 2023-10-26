import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./src/pages/HomeScreen";
import TrendingScreen from "./src/pages/TrendingScreen";
import { Icon } from '@rneui/themed';
import { useIsLogin } from './src/hooks/useIsLogin';

const Tab = createBottomTabNavigator();

export default function App() {
  const [loged, setLoged] = useIsLogin();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return <Icon name={ 
              route.name === "Home" ? "home" 
              : "heart"} type="font-awesome" color="black" />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen 
          name="Home" 
          children={()=> <HomeScreen loged={loged} setLoged={setLoged} />}
        />

        <Tab.Screen 
          name="Trends" 
          children={()=> <TrendingScreen loged={loged} setLoged={setLoged} />}
          options={ loged.result ? {} : { tabBarBadge: "!" } }
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

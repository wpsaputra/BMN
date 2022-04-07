import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { BlurView } from "@react-native-community/blur";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Screens/Home';




// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

function BmnScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Daftar BMN!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // if (route.name === 'Home') {
            //   iconName = focused
            //     ? 'ios-information-circle'
            //     : 'ios-information-circle-outline';
            // } else if (route.name === 'Settings') {
            //   iconName = focused ? 'ios-list-box' : 'ios-list';
            // }

            if (route.name === 'Home') {
              // iconName = 'home';
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              // iconName = 'md-construct-outline';
              iconName = focused
                ? 'md-construct'
                : 'md-construct-outline';
            } else if (route.name === 'Bmn') {
              // iconName = 'md-construct-outline';
              iconName = focused
                ? 'ios-qr-code'
                : 'ios-qr-code-outline';
            } else {
              iconName = focused
                ? 'md-newspaper'
                : 'md-newspaper-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        activeColor="tomato"
        inactiveColor="gray"
        barStyle={{ backgroundColor: 'white' }}
        labeled={false}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Bmn" component={BmnScreen} />
        <Tab.Screen name="History" component={BmnScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

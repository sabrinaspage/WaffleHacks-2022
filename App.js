// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MarketPlace from './screens/MarketPlace';
import MyBids from './screens/MyBids';
import Search from './screens/Search';
import UserProfile from './screens/UserProfile';
import MoreScreen from './screens/MoreScreen';
import SampleProduct from './screens/SampleProduct';

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MarketPlace} />
      <Tab.Screen name="My Bids" component={MyBids} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={UserProfile} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomnav"
          component={BottomNavigation}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="product" component={SampleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

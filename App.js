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
import WelcomeScreen from './screens/Login/WelcomeScreen';
import LoginScreen from './screens/Login/LoginScreen';
import RegisterScreen from './screens/Login/RegisterScreen';
import EnterPhoneScreen from './screens/Login/EnterPhoneScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StartScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ResetPasswordScreen" component={EnterPhoneScreen} />
    </Stack.Navigator>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MarketPlace}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Bids"
        component={MyBids}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loginnav"
          component={LoginNavigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="bottomnav"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen name="product" component={SampleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

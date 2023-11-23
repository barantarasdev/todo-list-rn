import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import useNavigation from './useNavigation'
import Home from '../screens/Home'
import SignIn from '../screens/SingIn'

const Stack = createStackNavigator()

function Navigation() {
  useNavigation()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}

export default Navigation

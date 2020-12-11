import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types'
import CampaignScreen from '../Campaign';
import HomeScreen from '../Home';
import FoundationScreen from '../Foundation';

const Stack = createStackNavigator<RootStackParamList>();

export default function Root() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'the Archive' }} />
          <Stack.Screen name="Foundation" component={FoundationScreen} />
          <Stack.Screen name="Campaign" component={CampaignScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
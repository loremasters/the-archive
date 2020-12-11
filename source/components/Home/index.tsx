import React from 'react';
import { Button, Text, View } from 'react-native';
import { HomeScreenProps } from './types'

function HomeScreen({ navigation }: HomeScreenProps) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Foundation"
          onPress={() => navigation.navigate("Foundation")}
        />
        <Button
          title="Go to Campaign"
          onPress={() => navigation.navigate("Campaign")}
        />
      </View>
    );
}

export default HomeScreen;
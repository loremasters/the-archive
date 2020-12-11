import React from 'react';
import { Button, Text, View } from 'react-native';
import { FoundationScreenProps } from './types';

function FoundationScreen({ navigation }: FoundationScreenProps) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Foundation Screen</Text>
        <Button
          title="Go to Foundation... again"
          onPress={() => navigation.push('Foundation')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
}

export default FoundationScreen;
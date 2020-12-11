import React from 'react';
import { Button, Text, View } from 'react-native';
import { CampaignScreenProps } from './types';

function CampaignScreen({ navigation }: CampaignScreenProps) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Campaign Screen</Text>
        <Button
          title="Go to Campaign... again"
          onPress={() => navigation.push('Campaign')}
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

export default CampaignScreen;
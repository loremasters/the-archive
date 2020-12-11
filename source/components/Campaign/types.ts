import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Root/types'

type CampaignScrenNavigationProp = StackNavigationProp<RootStackParamList, 'Campaign'>;
type CampaignScreenRouteProp = RouteProp<RootStackParamList, 'Campaign'>;

export type CampaignScreenProps = {
  navigation: CampaignScrenNavigationProp
  route: CampaignScreenRouteProp
};
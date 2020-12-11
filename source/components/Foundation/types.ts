import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Root/types'

type FoundationScrenNavigationProp = StackNavigationProp<RootStackParamList, 'Foundation'>;
type FoundationScreenRouteProp = RouteProp<RootStackParamList, 'Foundation'>;

export type FoundationScreenProps = {
  navigation: FoundationScrenNavigationProp
  route: FoundationScreenRouteProp
};
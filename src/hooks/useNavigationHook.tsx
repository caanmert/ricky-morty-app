import type {NavigationProp} from '@react-navigation/native';
import {useNavigation as _useNavigation} from '@react-navigation/native';
import type {RootParamList} from '../navigation/Navigation';

type RootNavigationProp = NavigationProp<RootParamList>;

const useNavigation = () => {
  return _useNavigation<RootNavigationProp>();
};

export default useNavigation;

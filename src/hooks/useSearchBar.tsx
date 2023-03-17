import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import useDebounce from './useDebounce';

const useSearchBar = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onChangeText: (event: unknown) => {
          setValue(event.nativeEvent.text);
        },
      },
    });
    return () => {};
  }, [navigation]);

  return debouncedValue;
};

export default useSearchBar;

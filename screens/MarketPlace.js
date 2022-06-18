import React from 'react';
import {View, Text} from 'react-native';
import SmallCarousel from './components/SmallCarousel';

const MarketPlace = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Market Place </Text>
      <SmallCarousel />
    </View>
  );
};

export default MarketPlace;

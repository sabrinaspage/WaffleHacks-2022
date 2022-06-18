import React from 'react';
import {View, Text, Button} from 'react-native';

const MarketPlace = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> Market Place </Text>
      <Button
        title="stuff"
        onPress={() => {
          navigation.navigate('product');
        }}
      />
    </View>
  );
};

export default MarketPlace;

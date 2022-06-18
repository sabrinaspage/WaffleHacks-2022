import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Card} from 'react-native-paper';
import Bid from '../components/Bid';

const SampleProduct = () => {
  const [images, setimages] = useState([
    'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
  ]);

  const [productImg, setProductImg] = useState(images[0]);

  return (
    <View style={{flex: 1, height: '100%'}}>
      <Card>
        <Card.Cover source={{uri: productImg}} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginHorizontal: 5,
          }}
          numColumns={3}
          data={images}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback onPress={() => setProductImg(item)}>
              <Image
                source={{uri: item}}
                key={index}
                style={{
                  width: 120,
                  height: 100,
                  marginTop: 10,
                  borderWidth: 2,
                  borderColor: 'transparent',
                }}
              />
            </TouchableWithoutFeedback>
          )}
        />
        <Card.Title title="Sample Product" subtitle="Emily Ortega" />
        <Text style={styles.descriptionText}>
          <Text style={styles.beginText}>Description: </Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        <Bid />
        <Button color="#841584" title="Bid now" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 10,
    marginHorizontal: 15,
  },
  beginText: {
    fontWeight: 'bold',
  },
});

export default SampleProduct;

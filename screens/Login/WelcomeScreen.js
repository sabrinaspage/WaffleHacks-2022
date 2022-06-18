import React, {useCallback} from 'react';
import {TouchableOpacity, Text, Linking, Image, View} from 'react-native';
import {Card} from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Card.Title title="Product" titleStyle={{textAlign: 'center'}} />
      <Card.Cover
        source={{
          uri: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        }}
        style={{marginHorizontal: 25}}
      />
      <Card.Title
        title="Select your Registration"
        titleStyle={{textAlign: 'center'}}
      />
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.tinyLogo}
            source={require('../../images/decentralized-social-deso-logo-D6D277E769-seeklogo.com.png')}
          />
          <Text style={styles.text}>Sign in with DeSo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.addButtonText}>Coinbase Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.addButtonText}>Wallet Connect</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.addButtonText}>Phantom</Text>
      </TouchableOpacity>
      <View>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Already have an account?
        </Text>
        <Text style={{textAlign: 'center', marginVertical: 20}}>
          Need help creating a wallet?
        </Text>
        <Text style={{textAlign: 'center', color: 'gray', marginTop: 20}}>
          Terms & Conditions
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  confirmButton: {
    marginBottom: 4,
    marginHorizontal: 0,
    backgroundColor: '#98B3B7',
    marginLeft: 25,
    marginRight: 25,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

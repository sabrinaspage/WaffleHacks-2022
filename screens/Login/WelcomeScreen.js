import React, {useCallback} from 'react';
import {TouchableOpacity, Text, Linking, View} from 'react-native';
import {Card} from 'react-native-paper';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity style={styles.confirmButton} onPress={handlePress}>
      <Text style={styles.addButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const WelcomeScreen = () => {
  return (
    <View style={styles.view}>
      <Card.Title title="Product" titleStyle={{textAlign: 'center'}} />
      <Card.Cover
        source={{
          uri: 'https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        }}
      />
      <Card.Title
        title="Select your Login"
        titleStyle={{textAlign: 'center'}}
      />
      <OpenURLButton url={'https://identity.deso.org/log-in'}>
        Sign Into DeSo
      </OpenURLButton>
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
        <Text style={{textAlign: 'center', marginVertical: 20}}>
          Terms & Conditions
        </Text>
        <Text style={{textAlign: 'center'}}>Need help creating a wallet?</Text>
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
  confirmButton: {
    marginBottom: 2,
    marginHorizontal: 0,
    backgroundColor: '#98B3B7',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

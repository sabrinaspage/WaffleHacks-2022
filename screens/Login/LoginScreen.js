import React from 'react';
import {Text, View} from 'react-native';

import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({
  domain: 'dev-6uibwiu8.us.auth0.com',
  clientId: 'rCxoIqEpT1aWFjPByJrWdox7iB2tCDhL',
});

auth0.webAuth
  .authorize({scope: 'openid profile email'})
  .then(credentials =>
    // Successfully authenticated
    // Store the accessToken
    this.setState({accessToken: credentials.accessToken}),
  )
  .catch(error => console.log(error));

const LoginScreen = () => {
  return (
    <View>
      <Text> First, let's sign you up </Text>
    </View>
  );
};

export default LoginScreen;

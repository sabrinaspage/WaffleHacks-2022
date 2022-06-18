import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Bid = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '50%'}}>
          <Text style={styles.currentBidText}>Current Bid</Text>
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.percentText}>$40.00</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 5}}>
        <View style={{width: '50%'}}>
          <Text style={styles.numOfBidsText}>Number of Bids</Text>
        </View>
        <View style={{width: '50%'}}>
          <Text style={styles.percentText}>20</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  currentBidText: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#50C878',
  },
  numOfBidsText: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  percentText: {
    fontSize: 18,
    textAlign: 'center',
  },
  descriptionText: {
    fontWeight: 'bold',
  },
});

export default Bid;

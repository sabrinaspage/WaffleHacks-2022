import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Modal from 'react-native-modal';

const InputSection = ({toggleConfirmationScreen}) => {
  return (
    <>
      <View style={styles.footer}>
        <Text style={styles.headerText}>Enter Bid Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={toggleConfirmationScreen}>
        <Text style={styles.addButtonText}>Confirm</Text>
      </TouchableOpacity>
    </>
  );
};

const ConfirmationSection = ({bidAmount}) => {
  return (
    <>
      <View style={styles.footer}>
        <Text style={styles.headerText}>Your bid Is </Text>
        <Text style={styles.headerText}>{bidAmount}</Text>
        <Text style={styles.headerText}>Proceed?</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.addButtonText}>Submit</Text>
      </TouchableOpacity>
    </>
  );
};

function ModalTester({isModalVisible, toggleModal}) {
  const [onConfirmationScreen, setOnConfirmationScreen] = useState(false);

  const toggleConfirmationScreen = () => {
    setOnConfirmationScreen(!onConfirmationScreen);
  };

  return (
    <Modal
      swipeDirection={'down'}
      isVisible={isModalVisible}
      style={styles.bottomView}>
      <View
        style={{
          height: '50%',
          marginTop: 'auto',
          backgroundColor: 'white',
        }}>
        {onConfirmationScreen ? (
          <ConfirmationSection
            toggleConfirmationScreen={toggleConfirmationScreen}
          />
        ) : (
          <InputSection toggleConfirmationScreen={toggleConfirmationScreen} />
        )}
        <TouchableOpacity
          style={styles.goBackButton}
          onPress={
            onConfirmationScreen ? toggleConfirmationScreen : toggleModal
          }>
          <Text style={styles.addButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

// onPress={toggleConfirmationScreen}
export default ModalTester;

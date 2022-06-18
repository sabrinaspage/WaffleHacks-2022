import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  input: {
    height: 40,
    marginHorizontal: 26,
    marginVertical: 1,
    borderWidth: 1,
    padding: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 26,
    paddingHorizontal: 26,
    paddingBottom: 10,
  },
  confirmButton: {
    marginBottom: 2,
    marginHorizontal: 0,
    backgroundColor: '#98B3B7',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackButton: {
    marginBottom: 0,
    marginHorizontal: 0,
    backgroundColor: '#98B3B7',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

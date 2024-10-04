import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewPrinc: {
    borderWidth: '3px',
    borderColor: 'black',
    borderRadius: '0.7rem',
    marginTop: '20px',
    width: '80%',    
    alignItems: 'center',
    alignSelf: 'center',
  },
  rButton: {
    width: '4.5rem',
    height: '3rem',
    borderWidth: '1.5px',
    borderRadius: '0.7rem',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    fontFamily: 'Snell Roundhand, cursive'
  },
  gButton: {
    width: '4.5rem',
    height: '3rem',
    borderWidth: '1.5px',
    borderRadius: '0.7rem',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    fontFamily: 'Snell Roundhand, cursive'
  }
});

export { styles };

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
  input: {
    margin: '7px',
    width: '15rem',
    height: '2rem',
    textAlign: 'center',
    borderWidth: '1px',
    borderRadius: '15px',
  },
  button: {
    width: '4.25rem',
    height: '4.25rem',
    borderWidth: '1.5px',
    borderRadius: '180%',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    fontFamily: 'Snell Roundhand, cursive',
    marginTop: '0.5rem',
  },
});

export { styles };

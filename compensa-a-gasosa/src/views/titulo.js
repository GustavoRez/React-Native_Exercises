import { Text, View } from 'react-native';

function Titulo(props) {
  return (
    <View>
      <Text style={{ fontSize: 25, fontFamily: 'Snell Roundhand, cursive', paddingTop: '10px', color: 'orange'}}> {props.titulo} </Text>
    </View>
  );
}

export default Titulo;
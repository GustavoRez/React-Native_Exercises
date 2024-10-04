import { Image, View } from 'react-native';

function Imagem() {
  return (
    <View style={{ width: 200, height: 200, backgroundColor: 'white' }}>
      <Image
        source={{
          uri: '',
        }}
        style={{ margin: 5, width: 190, height: 190 }}
      />
    </View>
  );
}

export default Imagem;

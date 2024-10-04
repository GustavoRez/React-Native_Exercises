import { Image, View } from 'react-native';

function Imagem() {
  return (
    <View style={{ width: 200, height: 200, backgroundColor: 'white' }}>
      <Image
        source={{
          uri: 'https://s2.glbimg.com/85GtKCwAxUUtIQ5alRKEZDAkwF0=/620x345/e.glbimg.com/og/ed/f/original/2014/08/20/186324553.jpg',
        }}
        style={{ margin: 5, width: 190, height: 190 }}
      />
    </View>
  );
}

export default Imagem;

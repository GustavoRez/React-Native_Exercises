import { Image, View } from 'react-native';

function Imagem() {
  return (
    <View style={{ width: 200, height: 200, backgroundColor: 'white' }}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVWXZAdloBK6ioHGMJbi5zKQ779CcYlM4l6Q&s',
        }}
        style={{ margin: 5, width: 190, height: 190 }}
      />
    </View>
  );
}

export default Imagem;

import { Image, View } from 'react-native';

function Ft_perfil() {
  return (
    <View style={{ width: 200, height: 200, backgroundColor: 'white' }}>
      <Image
        source={{
          uri: 'https://yt3.googleusercontent.com/ytc/AIdro_k-Pxl33OOwpvHmp2tzBoPuTjPYFLn_xBUAe3TVE0O6EnI=s900-c-k-c0x00ffffff-no-rj',
        }}
        style={{ margin: 5, width: 190, height: 190 }}
      />
    </View>
  );
}

export default Ft_perfil;

import { Text, View, Image } from 'react-native';

function Cartao() {
  return (
    <View
      style={{
        borderWidth: '3px',
        borderColor: 'black',
        marginTop: '20px',
        width: '70%',
        background: 'grey',
        alignItems: 'center',
        alignSelf: 'center'
      }}>
      <Text style={{ fontSize: 25, paddingBottom: '10px' }}>
        Meu Cartão
      </Text>

      <View style={{ width: 200, height: 200, backgroundColor: 'white' }}>
        <Image
          source={{
            uri: 'https://yt3.googleusercontent.com/ytc/AIdro_k-Pxl33OOwpvHmp2tzBoPuTjPYFLn_xBUAe3TVE0O6EnI=s900-c-k-c0x00ffffff-no-rj',
          }}
          style={{ margin: 5, width: 190, height: 190 }}
        />
      </View>

      <Text style={{ margin: 10 }}>Nome: Gustavo de Rezende Garcia</Text>
      <Text style={{ margin: 10 }}>Idade: 19 anos</Text>

      <View style={{ flexDirection: 'row'}}>
        <Text style={{ margin: 10, marginTop: 45 }}>Formação: </Text>
        <Image
          source={{
            uri: 'https://static.corinthians.com.br/uploads/16819155334a5cfa9281924139db466a8a19291aff.jpg',
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
}

export default Cartao;

import { Text, Image, View } from 'react-native';

function Formacao() {
  return (
    <View style={{ flexDirection: 'row' }}>      
      <Image
        source={{
          uri: 'https://static.corinthians.com.br/uploads/16819155334a5cfa9281924139db466a8a19291aff.jpg',
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

export default Formacao;

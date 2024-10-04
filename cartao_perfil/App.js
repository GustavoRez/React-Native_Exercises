import { Text, View, Image } from 'react-native';
import { styles } from './src/css/css';

import Cartao from './src/views/index';
import Titulo from './src/views/titulo';
import Ft_perfil from './src/images/ft_perfil';
import Nome from './src/views/nome';
import Idade from './src/views/idade';
import Formacao from './src/views/formacao';
import ImgFormacao from './src/images/formacao';

function App() {
  return (
    <View style={styles.viewPrinc}>
    <Titulo />
    <Ft_perfil />
    <Nome />
    <Idade />
    <Formacao/>
    <ImgFormacao/>
    </View>
  );
}

export default App;

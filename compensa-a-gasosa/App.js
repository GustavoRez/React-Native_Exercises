import {Button, Text, View, Image } from 'react-native';
import { styles } from './src/css/css';
import Titulo from './src/views/titulo';
import Imagem from './src/images/imagem';
import Preco from './src/views/contador';

function App() {
  return(
  
  <View style={styles.viewPrinc}>
  <Titulo titulo='Compensa a gasolina?'/>
  <Imagem />
  <Preco/>
  </View>
  )}

export default App;


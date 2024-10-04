import {Button, Text, View, Image } from 'react-native';
import { styles } from './src/css/css';
import Titulo from './src/views/titulo';
import Imagem from './src/images/imagem';
import IMC from './src/views/calculo';

function App() {
  return(
  
  <View style={styles.viewPrinc}>
  <Titulo titulo='Calcula IMC'/>
  <Imagem />
  <IMC/>

  </View>
  )}

export default App;

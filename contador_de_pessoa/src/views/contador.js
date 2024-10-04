import { Pressable, View, Text } from 'react-native';
import { styles } from '../css/css';
import { useState } from 'react';

export default function Contador() {
  const [pessoas, setPessoas] = useState(0);

  function Adicionar() {
    setPessoas(pessoas + 1);
  }

  function Reduzir() {
    if (pessoas > 0) setPessoas(pessoas - 1);
  }

  function Zerar(){
    setPessoas(0)
  }

  return (
    <View style={styles.view}>        
      <View style={styles.topContainer}>
        <Text style={styles.text}>Contador de Pessoas</Text>
        <Text style={styles.text2}>{pessoas}</Text>
      </View>
      <View style={styles.bottomContainer}>        
        <Pressable style={styles.botaoRemover} onPress={Reduzir}>
          <Text style={styles.buttonTxt}>-</Text>
        </Pressable>

        <Pressable style={styles.botaoResetar} onPress={Zerar}>
          <Text style={styles.resetTxt}>RESET</Text>
        </Pressable>
        
        <Pressable style={styles.botaoAdicionar} onPress={Adicionar}>
          <Text style={styles.buttonTxt}>+</Text>
        </Pressable>
      </View>      
    </View>
  );
}

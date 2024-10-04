import React, { useState } from 'react';
import { Pressable, Text, View, TextInput } from 'react-native';
import { styles } from '../css/css';

function Preco() {
  const [precoG, setPrecoG] = useState('Resultado:');
  const [precoE, setPrecoE] = useState('');
  const [valorTotal, setValor] = useState('Resultado');

  function pegaPreco() {
    if (precoE / precoG < 0.7) {
      setValor('Etanol é melhor');
    } else {
      setValor('Gasosa é melhor');
    }
  }

  return (
    <View style={{ alignItems: 'center', padding: '1rem' }}>
      <Text
        style={{
          fontSize: 35,
          fontFamily: 'Snell Roundhand, cursive',
        }}>
        <Text> {valorTotal} </Text>
      </Text>

      <View style={{ alignItems: 'center', padding: '1rem' }}>
        <TextInput
          placeholder="Insira o preço da gasolina"
          onChangeText = {setPrecoG}
          style={styles.input}
        />
        <TextInput
          placeholder="Insira o preço do etanol"
          onChangeText = {setPrecoE}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={pegaPreco}>Calcular</Pressable>
      </View>
    </View>
  );
}

export default Preco;

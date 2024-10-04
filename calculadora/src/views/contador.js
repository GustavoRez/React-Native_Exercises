import React, { useState } from 'react';
import { Pressable, Text, View, TextInput } from 'react-native';
import { styles } from '../css/css';

function Preco() {
  const [precoG, setPrecoG] = useState(0);
  const [precoE, setPrecoE] = useState(0);
  const [valorTotal, setValor] = useState(0);

  function pegaPreco() {
    setValor(parseInt(precoE) * parseInt(precoG));
  }
  function reset() {
    setValor(0);
  }

  return (
    <View style={{ alignItems: 'center', padding: '1rem' }}>
      <Text style={styles.contador}>
        <Text> {valorTotal} </Text>
      </Text>

      <View style={{alignItems: 'center'}}>
        <TextInput
          placeholder="Insira o primeiro valor"
          onChangeText={setPrecoG}
          style={styles.input}
        />
        <TextInput
          placeholder="Insira o segundo valor"
          onChangeText={setPrecoE}
          style={styles.input}
        />
        <View style={styles.alinhar}>
        <Pressable style={styles.resetB} onPress={reset}>Resetar</Pressable>
        <Pressable style={styles.calcB} onPress={pegaPreco}>Calcular</Pressable>
        </View>
      </View>
    </View>
  );
}

export default Preco;

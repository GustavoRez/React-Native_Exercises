import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';

function IMC() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);  
  const [imc, setIMC] = useState('Insira seus dados:');

  function calculaIMC() {
    const socorro = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    if (socorro <= 18.5) {
      setIMC('Abaixo do normal');
    } else if (socorro <= 24.9) {
      setIMC('Normal');
    } else if (socorro <= 29.9) {
      setIMC('Sobrepeso');
    } else if (socorro <= 34.9) {
      setIMC('Obesidade grau I');
    } else if (socorro <= 39.9) {
      setIMC('Obesidade grau II');
    } else {
      setIMC('Obesidade grau III');
    }
  }
  function reset() {
    setIMC('Insira seus dados:');
  }

  return (
    <View style={{ alignItems: 'center', padding: '1rem' }}>
      <Text
        style={{
          fontSize: 35,
          fontFamily: 'Snell Roundhand, cursive',
          paddingBottom: '1.5rem',
        }}>
        <Text> {imc} </Text>
      </Text>

      <View>
        <TextInput placeholder="Insira seu peso" onChangeText={setPeso} />
        <TextInput placeholder="Insira sua altura" onChangeText={setAltura} />
        <Button title="Calcular" onPress={calculaIMC} />
        <Button color="gray" title="Resetar" onPress={reset} />
      </View>
    </View>
  );
}

export default IMC;

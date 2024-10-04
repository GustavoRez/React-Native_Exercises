import React, { useState } from 'react';
import { View } from 'react-native';
import HomePage from './src/views/HomePage';
import styles from './src/css/css';

function App() {
  const [resultado, setResultado] = useState(null);

  function entrar() {
    setResultado(Math.floor(Math.random() * 101));
  }

  return (
    <View style={styles.container}>
      <HomePage resultado={resultado} onDiscover={entrar} />
    </View>
  );
}

export default App;

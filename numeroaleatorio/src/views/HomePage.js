import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../css/css';

const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8HwrUNUjKm6nUCDvzWau3x7NO36__M7RpdwZtY9nD_e9jbg0FBEeSrIn89i4RaKzk1uw&usqp=CAU';

const HomePage = ({ resultado, onDiscover }) => {
  return (
    <View style={styles.area}>
      <Text style={styles.title}>Número Aleatório</Text>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.prompt}>Vou adivinhar que número você tá pensando!</Text>
      <Button title="Descobrir" onPress={onDiscover} />
      {resultado !== null && (
        <Text style={styles.resultText}>{resultado}</Text>
      )}
    </View>
  );
};

export default HomePage;

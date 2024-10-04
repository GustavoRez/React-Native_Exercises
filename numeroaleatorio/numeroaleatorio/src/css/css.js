import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Cor de fundo diferente
    justifyContent: 'center',
  },
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Georgia', // Fonte alterada
    color: '#333', // Cor do texto
  },
  image: {
    width: 250,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10, // Bordas arredondadas na imagem
    borderWidth: 2,
    borderColor: '#007bff', // Cor da borda
  },
  prompt: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Verdana', // Fonte alterada
    color: '#555',
  },
  resultText: {
    textAlign: 'center',
    fontSize: 45,
    color: 'red',
    fontFamily: 'Arial', // Fonte alterada
  },
});

export default styles;

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const sumar = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const restar= () => {
    const resta = parseFloat(num1) - parseFloat(num2);
    setResult(resta);
  };

  const multiplicar = () => {
    const multiplicacion = parseFloat(num1) * parseFloat(num2);
    setResult(multiplicacion);
  };
  return (
    <View style={styles.container}>
      <Text>Calculadora</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={text => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={text => setNum2(text)}
        keyboardType="numeric"
      />
       <Button  title="SUMAR" onPress={sumar} />
      <Button title="RESTAR" onPress={restar} />
      <Button title="MULTIPLICAR" onPress={multiplicar} />

      <Text style={styles.result}>RESULTADO: {result}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginVertical: 10,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

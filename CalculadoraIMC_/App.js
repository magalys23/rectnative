import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Aplicacion = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    if (!altura || !peso) {
      setResultado('Ingrese su altura y peso.');
      return;
    }

    const alturaEnMetros = parseFloat(altura) / 100;
    const pesoEnKg = parseFloat(peso);

    const imc = pesoEnKg / (alturaEnMetros * alturaEnMetros);

    if (imc < 18.5) {
      setResultado('Su peso es inferior al normal.');
    } else if (imc >= 18.5 && imc < 25.0) {
      setResultado('Su peso es normal.');
    } else if (imc >= 25.0 && imc < 30.0) {
      setResultado('Su peso es superior al normal.');
    } else {
      setResultado('Tiene obesidad.');
    }
  };

  return (
    <View style={estilos.contenedor}>
      <Text>CALCULADORA IMC</Text>
      <TextInput
        style={estilos.entrada}
        placeholder="Ingrese su altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(texto) => setAltura(texto)}
      />
      <TextInput
        style={estilos.entrada}
        placeholder="Ingrese su peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(texto) => setPeso(texto)}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      <Text style={estilos.resultado}>{resultado}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entrada: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  resultado: {
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Aplicacion;

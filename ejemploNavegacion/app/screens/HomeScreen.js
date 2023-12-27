import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="IR A CONTACTOS"
            onPress={() => {
              navigation.navigate('ContacsNav');
            }}
            style={styles.button}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="IR A PRODUCTOS"
            onPress={() => {
              navigation.navigate('ProductsNav');
            }}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    marginRight: 20, // Establece la distancia entre los botones
  },
});
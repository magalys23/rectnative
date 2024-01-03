import React from 'react';
import { AsyncStorage } from 'react-native';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogoutScreen = () => {
    const handleLogout = () => {
        // Ejemplo: Borrar el token de autenticación (simulado)
        // En una aplicación real, usarías AsyncStorage o alguna solución de almacenamiento seguro
        AsyncStorage.removeItem('authToken').then(() => {
          // Redirigir al usuario a la pantalla de inicio de sesión
          navigation.navigate('InicioSesion');
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
      };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cerrar Sesión</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LogoutScreen;
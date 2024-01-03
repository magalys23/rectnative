import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleLogout = () => {
    // Aquí puedes implementar la lógica para cerrar sesión
    console.log('Cerrar Sesión');
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigateToScreen('Productos')}>
        <Text>Productos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('EjemploTabs')}>
        <Text>Ejemplo Tabs</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

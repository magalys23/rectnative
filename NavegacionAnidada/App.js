import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import ProductsScreen from './app/screens/ProductsScreen'; 
import TabsScreen from './app/screens/TabsScreen';
import LogoutScreen from './app/screens/LogoutScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleLogout = () => {
    
    console.log('Cerrar Sesión');
    
    navigation.navigate('InicioSesion');
  };

  return (
    <DrawerContentScrollView style={styles.drawerContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Menú de Navegación</Text>
      </View>
      <DrawerItem
        label="Productos"
        onPress={() => navigateToScreen('Productos')}
        labelStyle={styles.drawerItemLabel}
      />
      <DrawerItem
        label="Ejemplo Tabs"
        onPress={() => navigateToScreen('EjemploTabs')}
        labelStyle={styles.drawerItemLabel}
      />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutButton}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerStyle={styles.drawer}
      >
        <Drawer.Screen name="Productos" component={ProductsScreen} />
        <Drawer.Screen name="EjemploTabs" component={TabsScreen} />
        <Drawer.Screen name="CerrarSesion" component={LogoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#ffffff',
    width: 240,
  },
  drawerContent: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  drawerItemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;

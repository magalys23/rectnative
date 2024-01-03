import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ProductsScreen = () => {
  // Ejemplo de datos de productos con precios
  const productsData = [
    { id: '1', name: 'Cama', price: '$20.99' },
    { id: '2', name: 'Mesa', price: '$15.49' },
    { id: '3', name: 'Sillas', price: '$30.00' },
    // Agrega más productos según sea necesario
  ];

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Productos</Text>
      <FlatList
        data={productsData}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0ECE7',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: '100%',
    
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:10,
  },
  productPrice: {
    fontSize: 20,
    color: '#4A235A',
  },
});

export default ProductsScreen;

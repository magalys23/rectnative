import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tabs Screen</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7DC6F',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default TabsScreen;

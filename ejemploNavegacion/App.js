import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home} from './app/screens/HomeScreen';
import { Contacs } from './app/screens/ContactsScreen';
import { Products } from './app/screens/ProductosScreen';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='HomeNav' component={Home}/>
      <Stack.Screen name='ProductsNav' component={Products}/>
      <Stack.Screen name='ContacsNav' component={Contacs}/> 
      
      
    </Stack.Navigator>

   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

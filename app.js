import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './tela1';
import Tela2 from './tela2';
import Tela3 from './tela3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1">
        <Stack.Screen name="Tela1" component={Tela1} options={{ title: 'Convite Virtual' }} />
        <Stack.Screen name="Tela2" component={Tela2} options={{ title: 'Detalhes do Evento' }} />
        <Stack.Screen name="Tela3" component={Tela3} options={{ title: 'Contagem Regressiva' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

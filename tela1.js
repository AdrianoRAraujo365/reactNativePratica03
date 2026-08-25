import React from 'react';
import { View, Text, Button } from 'react-native';
import Estilo from './Estilo';

export default function Tela1({ navigation }) {
  return (
    <View style={Estilo.container}>
      <Text style={Estilo.FontGrande}>🎉 Convite Virtual 🎉</Text>
      <Button title="Ver Detalhes" onPress={() => navigation.navigate('Tela2')} />
    </View>
  );
}

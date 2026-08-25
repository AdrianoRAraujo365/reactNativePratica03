import React from 'react';
import { View, Text, Button } from 'react-native';
import Estilo from './Estilo';

export default function Tela2({ navigation }) {
  return (
    <View style={Estilo.container}>
      <Text style={Estilo.FontGrande}>Aniversário da Amandha</Text>
      <Text style={Estilo.FontMedio}>📅 Data: 01/10/2023</Text>
      <Text style={Estilo.FontMedio}>📍 Local: Cantine Sax</Text>
      <Button title="Ver Contagem Regressiva" onPress={() => navigation.navigate('Tela3')} />
    </View>
  );
}

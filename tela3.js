import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Estilo from './Estilo';

export default function Tela3() {
  const evento = new Date("2023-10-01T00:00:00");
  const [tempoRestante, setTempoRestante] = useState({});

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diferenca = evento - agora;

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      setTempoRestante({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <View style={Estilo.container}>
      <Text style={Estilo.FontGrande}>⏳ Contagem Regressiva</Text>
      <Text style={Estilo.FontMedio}>
        {tempoRestante.dias}d {tempoRestante.horas}h {tempoRestante.minutos}m {tempoRestante.segundos}s
      </Text>
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  const Produto = (props) => {
  
    const handleAction = () => {
      null
    };


    return (
      <View style={styles.produto}>
        <Text>{props.nome}</Text>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botaoSim} onPress={handleAction}><Text>Sim</Text></TouchableOpacity>
        </View>
      </View>
    );
  };

  const Produtos = [
    { id: 1, nome: 'Café com leite' },
    { id: 2, nome: 'Cafe moccachino' },
    { id: 3, nome: 'Café amarelo' },
  ];
  
    return (
      <View>
        {Produtos.map((produto) => (
          <Produto nome ={produto.nome} />
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  produto: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  botoes: {
    flexDirection: 'row',
    marginTop: 10,
  },
  botaoSim: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  botaoNao: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
  },
});

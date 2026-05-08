import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const CustomInput = ({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (text: string) => void }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChange}
    placeholderTextColor="#999"
  />
);

export default function App() {
  const [inputName, setName] = useState("");
  const [inputEdad, setEdad] = useState("");
  const tareas = ["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"];
  return (
    <View style={styles.container}>
      <CustomInput 
        placeholder={"Nombre"} 
        value={inputName} 
        onChange={setName}
      />
      <CustomInput 
        placeholder={"Edad"} 
        value={inputEdad} 
        onChange={setEdad}
      />
      <StatusBar style="auto" />
      <Text style={styles.texto}>
        {saludo(inputName)}{"\n"}
        {inputEdad? (parseInt(inputEdad) >= 18 ? "Mayor de edad" : "Menor de edad"): "Ingrese su edad"}
      </Text>
      <Text style={styles.Titulos}>
        Tareas Pendientes
      </Text>
      <Text style={styles.Tareas}>
        {tareas.map((tarea, index) => (
          <Text key={index}>{tarea}{"\n"}</Text>
        ))}
      </Text>
    </View>
  );
}

function saludo(name: string): string {
  return `Que tal ${name}`;
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '80%',
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
  Titulos: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Tareas: {
    width: '80%',
    borderColor: 'rgb(31, 28, 28)',
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    color: '#000000',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#923333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

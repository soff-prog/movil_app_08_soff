import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'
import { supabase } from '../supabase/config'

export default function GuardarScreen() {
  const [id, setId] = useState('')
  const [hechicero, setHechicero] = useState('')
  const [nivel, setNivel] = useState(1)
  const [manaMaximo, setManaMaximo] = useState(100)
  const [manaActual, setManaActual] = useState(100)
  async function crearHechicero() {
    if (
      id === '' ||
      hechicero === ''
    ) {
      Alert.alert('Datos incompletos', 'Ingrese el ID y nombre del hechicero')
      return
    }
    const { error } = await supabase
      .from('hechicero')
      .insert({
        id: id,
        nombre: hechicero,
        nivel: nivel,
        manaMaximo: manaMaximo,
        manaActual: manaActual
      })
    if (error) {
      console.log(error)
      Alert.alert('Error', 'No se pudo guardar el hechicero')
      return
    }

    Alert.alert('Hechicero creado', `ID: ${id}\nNombre: ${hechicero}`)

    // Limpiar camp
    setId('')
    setHechicero('')
    setNivel(1)
    setManaMaximo(100)
    setManaActual(100)
  }

  return (
    <ImageBackground
      source={require('../assets/images/hechicero1.jpg')}
      style={globalStyles.container}
    >
      <Text style={styles.titulo}>
        Registro de Hechicero
      </Text>
      <TextInput
        placeholder="Ingresar ID"
        placeholderTextColor="#555"
        style={styles.input}
        value={id}
        onChangeText={setId}
      />
      <TextInput
        placeholder="Nombre del hechicero"
        placeholderTextColor="#555"
        style={styles.input}
        value={hechicero}
        onChangeText={setHechicero}
      />
      <TextInput
        placeholder="Nivel"
        placeholderTextColor="#555"
        style={styles.input}
        keyboardType="numeric"
        value={nivel.toString()}
        onChangeText={(text) => setNivel(+text)}
      />
      <TextInput
        placeholder="Maná máximo"
        placeholderTextColor="#555"
        style={styles.input}
        keyboardType="numeric"
        value={manaMaximo.toString()}
        onChangeText={(text) => {
          const nuevoMana = +text
          setManaMaximo(nuevoMana)
          setManaActual(nuevoMana)
        }}
      />
      <TextInput
        placeholder="Maná actual"
        placeholderTextColor="#555"
        style={styles.input}
        keyboardType="numeric"
        value={manaActual.toString()}
        onChangeText={(text) => setManaActual(+text)}
      />
      <TouchableOpacity
        style={styles.boton}
        onPress={crearHechicero}
      >
        <Text style={styles.textoBoton}>
          Guardar Hechicero
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
    textShadowColor: '#00E5FF',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 6
  },
  input: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    margin: 8,
    fontSize: 16
  },
  boton: {
    backgroundColor: '#0277BD',
    width: 250,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
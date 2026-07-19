import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'
import { supabase } from '../supabase/config'

export default function HechizoScreen() {

  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [costoMana, setCostoMana] = useState(0)
  const [danioBase, setDanioBase] = useState(0)
  const [idHechicero, setIdHechicero] = useState('')

  async function guardarHechizo() {
    if (
      id === '' ||
      nombre === '' ||
      idHechicero === ''
    ) {
      Alert.alert('Datos incompletos', 'Ingrese todos los datos del hechizo')
      return
    }
    // Verificar que exista el hechicero
    const { data: hechiceroExiste, error: errorHechicero } = await supabase
      .from('hechicero')
      .select()
      .eq('id', idHechicero)
      .single()
    if (errorHechicero || !hechiceroExiste) {
      Alert.alert('Error', 'Error: El hechicero no existe')
      return
    }
    const { error } = await supabase
      .from('hechizo')
      .insert({
        id: id,
        nombre: nombre,
        costoMana: costoMana,
        danioBase: danioBase,
        idHechicero: idHechicero
      })
    if (error) {
      console.log(error)
      Alert.alert('Error', 'No se pudo crear el hechizo')
      return
    }
    Alert.alert('Hechizo creado',
      `Nombre: ${nombre}\nDaño: ${danioBase}`
    )
    setId('')
    setNombre('')
    setCostoMana(0)
    setDanioBase(0)
    setIdHechicero('')
  }

  return (
    <ImageBackground
      source={require('../assets/images/hechicero2.jpg')}
      style={globalStyles.container}
    >
      <Text style={styles.titulo}>
        Taller de Hechizos
      </Text>
      <TextInput
        placeholder="ID del hechizo"
        placeholderTextColor="#555"
        style={styles.input}
        value={id}
        onChangeText={setId}
      />
      <TextInput
        placeholder="Nombre del hechizo"
        placeholderTextColor="#555"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Daño base"
        placeholderTextColor="#555"
        style={styles.input}
        keyboardType="numeric"
        value={danioBase.toString()}
        onChangeText={(text) => setDanioBase(+text)}
      />
      <TextInput
        placeholder="Costo de maná"
        placeholderTextColor="#555"
        style={styles.input}
        keyboardType="numeric"
        value={costoMana.toString()}
        onChangeText={(text) => setCostoMana(+text)}
      />
      <TextInput
        placeholder="ID del hechicero"
        placeholderTextColor="#555"
        style={styles.input}
        value={idHechicero}
        onChangeText={setIdHechicero}
      />
      <TouchableOpacity
        style={styles.boton}
        onPress={guardarHechizo}
      >
        <Text style={styles.textoBoton}>
          Crear Hechizo
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
    textShadowColor: '#D500F9',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowRadius: 7
  },
  input: {
    width: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    margin: 8,
  },
  boton: {
    backgroundColor: '#7B1FA2',
    width: 250,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18

  }
})
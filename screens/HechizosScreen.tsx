import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'

export default function HechizoScreen() {

  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [costoMana, setCostoMana] = useState('')
  const [danioBase, setDanioBase] = useState('')
   const [idHechicero, setIdHechicero] = useState('')

  return (
    <ImageBackground source={require('../assets/images/hechicero2.jpg')} style={ globalStyles.container }>
      <Text>HechizoScreen</Text>

      <TextInput
        placeholder="id hechizo"
        style={ globalStyles.inputHechizo }
        value={id}
        onChangeText={setId}  
      />
      <TextInput
        placeholder="nombre hechizo"
        style={ globalStyles.inputHechizo }
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Costo de maná"
        style={ globalStyles.inputHechizo }
        value={costoMana}
        onChangeText={setCostoMana}
      />

      <TextInput
        placeholder="Daño base"
        style={ globalStyles.inputHechizo }
        value={danioBase}
        onChangeText={setDanioBase}
      />

      <TextInput
        placeholder="id de hechicero"
        style={ globalStyles.inputHechizo }
        value={idHechicero}
        onChangeText={setIdHechicero}
      />

      <Button title='Guardar' color='green'/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
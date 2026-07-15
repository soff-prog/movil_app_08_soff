import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'

export default function GuardarScreen() {

  const [id, setId] = useState('')
  const [hechicero, setHechicero] = useState('')
  const [nivel, setNivel] = useState('')
  const [manaMaximo, setmanaMaximo] = useState('')
  const [manaActual, setmanaActual] = useState('')

  
  return (
    <ImageBackground source={require('../assets/images/hechicero1.jpg')} style={ globalStyles.container }>
      <Text>GuardarScreen</Text>

      <TextInput
      placeholder="Ingresar id"
      style={ globalStyles.inputHechicero }
      onChangeText={ (text) => setId(text) }
      />
      <TextInput
        placeholder="Hechicero"
        style={ globalStyles.inputHechicero }
        onChangeText={ (text) => setHechicero(text) }
      />
      <TextInput
        placeholder="Ingresar maná máximo"
        style={ globalStyles.inputHechicero }
          onChangeText={ (text) => setmanaMaximo(text) }
      />

      <TextInput 
        placeholder='Ingresar maná actual'
        style={ globalStyles.inputHechicero }
        onChangeText={ (text) => setmanaActual(text) }

      />
      <TextInput
        placeholder="Ingresar nivel"
        style={ globalStyles.inputHechicero }
        onChangeText={ (text) => setNivel(text) }
      />

      <Button title='guardar'/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'
import { supabase } from '../supabase/config'

export default function GuardarScreen() {

  const [id, setId] = useState('')
  const [hechicero, setHechicero] = useState('')
  const [nivel, setNivel] = useState(0)
  const [manaMaximo, setmanaMaximo] = useState(0)
  const [manaActual, setmanaActual] = useState(0)

  async function crearHechicero(){
    const { error } = await supabase
      .from('hechicero')
      .insert({ 
        id: id, 
        nombre: hechicero,
        nivel: nivel,
        manaMaximo: manaMaximo,
        manaActual: manaActual
      })

      console.log(error);
  }
  
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
          onChangeText={ (text) => setmanaMaximo(+text) }
      />

      <TextInput 
        placeholder='Ingresar maná actual'
        style={ globalStyles.inputHechicero }
        onChangeText={ (text) => setmanaActual(+text) }

      />
      <TextInput
        placeholder="Ingresar nivel"
        style={ globalStyles.inputHechicero }
        onChangeText={ (text) => setNivel(+text) }
      />

      <Button 
        title='guardar'
        onPress={crearHechicero}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
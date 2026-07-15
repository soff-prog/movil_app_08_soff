import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'
import { supabase } from '../supabase/config'

export default function HechizoScreen() {

  const [id, setId] = useState('')
  const [nombre, setNombre] = useState('')
  const [costoMana, setCostoMana] = useState(0)
  const [danioBase, setDanioBase] = useState(0)
   const [idHechicero, setIdHechicero] = useState('')

   async function guardarHechizo(){
     const { error } = await supabase
          .from('hechizo')
          .insert({ 
            id: id, 
            nombre: nombre,
            costoMana: costoMana,
            danioBase: danioBase,
            idHechicero: idHechicero
          })
    
          console.log(error);
   }

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
        value={costoMana.toString()}
        onChangeText={(text)=> setCostoMana(+text)}
      />

      <TextInput
        placeholder="Daño base"
        style={ globalStyles.inputHechizo }
        value={danioBase.toString()}
        onChangeText={(text)=> setDanioBase(+text)}
      />

      <TextInput
        placeholder="id de hechicero"
        style={ globalStyles.inputHechizo }
        value={idHechicero}
        onChangeText={setIdHechicero}
      />

      <Button 
        title='Guardar' 
        color='green'
        onPress={guardarHechizo}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'
import { supabase } from '../supabase/config'

export default function ListaHechicerosScreen() {

  const [hechiceros, sethechicero] = useState([])

  useEffect(() => {
    leerHechicero()
  }, [])
  

  async function leerHechicero(){
    const { data, error } = await supabase
      .from('hechicero')
      .select()

    sethechicero(data as any);

    console.log(hechiceros);

  }

  return (
    <ImageBackground source={require('../assets/images/hechicero3.jpg')} style={ globalStyles.container }>
      <Text>ListaHechicerosScreen</Text>
      <FlatList
        data={hechiceros}
        renderItem={({item})=>
          <Text style={{fontSize:30, color: "#06020f"}}>{item.nombre}</Text>
        }
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../styles/EstilosGloables'
import { supabase } from '../supabase/config'
import CardHechicero from '../components/CardHechicero';
import { Hechicero } from '../types/tipos';

export default function ListaHechicerosScreen() {

  const [hechiceros, sethechicero] = useState<Hechicero[]>([])

  useEffect(() => {
    leerHechicero()
  }, [])
  

  async function leerHechicero(){
    const { data, error } = await supabase
      .from('hechicero')
      .select()

    sethechicero(data as Hechicero[]);
  }

  return (
    <ImageBackground source={require('../assets/images/hechicero3.jpg')} style={ globalStyles.container }>
      <Text>ListaHechicerosScreen</Text>
      <FlatList
        data={hechiceros}
        renderItem={({item})=>
          <CardHechicero
            datos={item}
          />
        }
      />
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({})
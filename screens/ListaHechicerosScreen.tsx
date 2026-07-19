import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { supabase } from '../supabase/config'
import CardHechicero from '../components/CardHechicero'
import { Hechicero } from '../types/tipos'

export default function ListaHechicerosScreen() {

  const [hechiceros,setHechiceros] = useState<Hechicero[]>([])

  useEffect(()=>{
    cargarHechiceros()
  },[])

  async function cargarHechiceros(){
    const {data,error}= await supabase
      .from('hechicero')
      .select()
    if(error){
      console.log(error)
      return
    }
    setHechiceros(data as Hechicero[])
  }

  return (
    <ImageBackground
      source={require('../assets/images/hechicero3.jpg')}
      style={styles.fondo}
    >
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>
          El Tablero de Hechiceros
        </Text>
        <FlatList
          data={hechiceros}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <CardHechicero
              datos={item}
            />
          )}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
fondo:{
flex:1
},
contenedor:{
flex:1,
alignItems:'center',
paddingTop:50
},
titulo:{
fontSize:28,
fontWeight:'bold',
color:'#FFFFFF',
marginBottom:25,
textAlign:'center',
textShadowColor:'#B026FF',
textShadowOffset:{
width:2,
height:2
},
textShadowRadius:10

}
})
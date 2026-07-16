import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import {useState} from 'react';
import { supabase } from '../supabase/config';
import { Hechicero, Hechizo } from '../types/tipos';

export default function CardHechicero(props: {datos:Hechicero}) {

    let hechicero = props.datos 
    const [hechizos, sethechizos] = useState<Hechizo[]>([])

     async function leerHechizo(idHechicero: string){
        const { data, error } = await supabase
          .from('hechizo')
          .select()
          .eq("idhechicero", idHechicero)
    
        sethechizos(data as Hechizo[]);
      }

  return (
    <TouchableOpacity
     onPress={()=> leerHechizo(hechicero.id)}
    >
        <Text style={styles.txt}>{hechicero.nombre}</Text>
        <Text style={styles.txt}>{hechicero.nivel}</Text>
        <Text style={styles.txt}>{hechicero.manaMaximo}</Text>
        <Text style={styles.txt}>{hechicero.manaActual}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  txt:{

  }
})
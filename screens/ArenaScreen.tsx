import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native'
import { supabase } from '../supabase/config'
import { Hechicero, Hechizo } from '../types/tipos'

export default function ArenaScreen() {
  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const hechicero: Hechicero | undefined = route.params?.hechicero
  const [hechizos, setHechizos] = useState<Hechizo[]>([])
  const [vidaMaximaDragon, setVidaMaximaDragon] = useState(150)
  const [vidaDragon, setVidaDragon] = useState(150)
  const [manaActual, setManaActual] = useState(hechicero?.manaActual ?? 0)

  useFocusEffect(
    React.useCallback(() => {
      const vidaNueva = Math.floor(Math.random() * (200 - 100) + 100)
      setVidaMaximaDragon(vidaNueva)
      setVidaDragon(vidaNueva)
      if (hechicero) {
        setManaActual(hechicero.manaActual)
        cargarHechizos()
      }
    }, [hechicero])
  )
  async function cargarHechizos() {
    if (!hechicero) {
      return
    }
    const { data, error } = await supabase
      .from('hechizo')
      .select('*')
      .eq('idHechicero',hechicero.id)
    if (error) {
      console.log(error)
      return
    }
    console.log("Hechicero seleccionado:",hechicero.id)
    console.log("Hechizos encontrados:",data)
    setHechizos(data as Hechizo[])
  }

  function atacar(hechizo: Hechizo) {

    if (manaActual < hechizo.costoMana) {
      Alert.alert("Maná insuficiente","No tienes suficiente maná para lanzar este hechizo")
      return
    }

    const dañoReal = hechizo.danioBase +(hechicero!.nivel * 1.5)
    const nuevaVida = Math.max(vidaDragon - dañoReal, 0)
    const nuevoMana = manaActual - hechizo.costoMana
    setVidaDragon(nuevaVida)
    setManaActual(nuevoMana)

    if (nuevaVida <= 0) {
      Alert.alert("Victoria", "¡Victoria! El dragón ha caído", [
        {
          text: "Aceptar",
          onPress: () => { navigation.navigate("Lista Hechiceros") }
        }])
      return
    }
    const hechizoMasBarato =
      Math.min(...hechizos.map(
        h => h.costoMana
      )
      )
    if (
      nuevoMana < hechizoMasBarato
    ) {
      Alert.alert("Derrota", "¡Te has quedado sin maná! El dragón te ha derrotado")
    }
  }
  if (!hechicero) {
    return (
      <View style={styles.error}>
        <Text>
          No existe hechicero seleccionado
        </Text>
      </View>
    )
  }

  return (
    <ImageBackground
      source={require('../assets/images/hechicero3.jpg')}
      style={styles.fondo}
    >
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>
          Arena Mágica
        </Text>
        <View style={styles.cajaDragon}>
          <Text style={styles.dragón}>
            Dragón de Fuego
          </Text>
          <Text style={styles.texto}>
            Vida:{vidaDragon}/{vidaMaximaDragon}
          </Text>
          <View style={styles.barraFondo}>
            <View
              style={[styles.barraVida, { width: `${(vidaDragon / vidaMaximaDragon) * 100}%` }]}
            />
          </View>
        </View>
        <View style={styles.cajaMago}>
          <Text style={styles.texto}>
            {hechicero.nombre}
          </Text>
          <Text style={styles.texto}>
            Maná:{manaActual}/{hechicero.manaMaximo}
          </Text>
          <View style={styles.barraFondo}>
            <View
              style={[
                styles.barraMana, { width: `${(manaActual / hechicero.manaMaximo) * 100}%` }
              ]}
            />
          </View>
        </View>
        <Text style={styles.subtitulo}>
          Hechizos disponibles
        </Text>
        {
          hechizos.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={
                [
                  styles.boton,
                  manaActual < item.costoMana && styles.botonDeshabilitado
                ]
              }
              disabled={
                manaActual < item.costoMana
              }
              onPress={() => atacar(item)}
            >
              <Text style={styles.textoBoton}>
                {item.nombre} {"\n"}
                Daño:{item.danioBase} {" | "}
                Maná:{item.costoMana}
              </Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  fondo: {
    flex: 1
  },
  contenedor: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E0AAFF'
  },
  dragón: {
    fontSize: 24,
    color: '#ff5555',
    fontWeight: 'bold',
    margin: 15
  },
  texto: {
    color: 'white',
    fontSize: 18,
    margin: 5
  },
  subtitulo: {
    color: '#E0AAFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20
  },
  barraFondo: {
    width: 300,
    height: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden'
  },
  barraVida: {
    height: '100%',
    backgroundColor: 'red'
  },
  barraMana: {
    height: '100%',
    backgroundColor: '#00BFFF'
  },
  boton: {
    width: 300,
    backgroundColor: '#6A0DAD',
    padding: 15,
    borderRadius: 15,
    marginTop: 10
  },
  botonDeshabilitado: {
    backgroundColor: '#555'
  },
  textoBoton: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cajaDragon: {
    width: 330,
    backgroundColor: 'rgba(80,0,0,0.75)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#ff5555'
  },
  cajaMago: {
    width: 330,
    backgroundColor: 'rgba(0, 40, 100, 0.79)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#00BFFF'
  },
})
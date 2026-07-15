import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/EstilosGloables'

export default function ListaHechicerosScreen() {
  return (
    <ImageBackground source={require('../assets/images/hechicero3.jpg')} style={ globalStyles.container }>
      <Text>ListaHechicerosScreen</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})
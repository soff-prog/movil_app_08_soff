import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Hechicero } from '../types/tipos'

export default function CardHechicero(
  {
    datos
  }:
    {
      datos: Hechicero
    }
) {

  const navigation = useNavigation<any>()

  return (
    <View style={styles.card}>
      <Text style={styles.nombre}>
         {datos.nombre}
      </Text>
      <Text style={styles.nivel}>
        Nivel: {datos.nivel}
      </Text>
      <TouchableOpacity
        style={styles.boton}
        onPress={() => {

          navigation.navigate(
            "Arena",
            {
              hechicero: datos
            }
          )
        }}>
        <Text style={styles.textoBoton}>
          Ir a la Arena
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: 'rgba(25,10,50,0.9)',
    padding: 20,
    marginBottom: 15,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#9D4EDD',
    alignItems: 'center'
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0AAFF',
    marginBottom: 10
  },
  nivel: {
    fontSize: 18,
    color: 'white',
    marginBottom: 15
  },
  boton: {
    backgroundColor: '#6A0DAD',
    width: '100%',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center'
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }
})
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'





const PlanetDisplay = ({ Planet, PlanetInfo, removePlanet }) => {
  return (
    <View key={Planet.id} style={styles.planetColor}>

      <View style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#b09a8b',
        overflow: 'hidden',
        position: 'relative',
        borderColor: 'black',
        borderWidth: 2,
      }}>
        <View style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: '#dac8b3',
          position: 'absolute',
          right: 15,
        }} />
      </View>

      <Text style={styles.text}>{Planet.name}</Text>
      <Text style={styles.text}>{Planet.conquest}</Text>
      <Text style={styles.text}>{Planet.population}</Text>
      <Text style={styles.text}>{Planet.settlements}</Text>
      <Text style={styles.text}>{Planet.natural_resources}</Text>
      <Text style={styles.text}>{Planet.location}</Text>
      <Text style={styles.text}>{Planet.communication}</Text>
      <Text style={styles.text}>{Planet.ruler}</Text>


      <TouchableOpacity style={styles.button} onPress={() => removePlanet(Planet.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>

  )

}

export default PlanetDisplay
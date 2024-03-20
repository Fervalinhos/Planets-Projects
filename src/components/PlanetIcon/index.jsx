import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const PlanetIcon = ({Planet, PlanetInfo, removePlanet}) => {
  return (
           <View key={Planet.id} style={styles.planet}>
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

export default PlanetIcon
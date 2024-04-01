import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import PlanetIcon from '../PlanetIcon'
import { useState } from 'react'
import PlanetsCard from '../PlanetsCard'
import { useNavigation } from '@react-navigation/native'






const PlanetDisplay = ({ Planet, removePlanet, updatePlanet }) => {


  const [buttonActive, setButtonActive] = useState(false)

  const navigation = useNavigation()

  return (
    <View key={Planet.id} style={styles.planetColor}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlanetInfo", {Planet, removePlanet, updatePlanet})}>
        <PlanetIcon color1={Planet.color1} color2={Planet.color2} />
        <Text style={styles.text}>{Planet.name}</Text>
      </TouchableOpacity>
      {/* {
        buttonActive ? <PlanetsCard color1={Planet.color1} color2={Planet.color2} name={Planet.name} conquest={Planet.conquest} population={Planet.population} settlements={Planet.settlements} natural_resources={Planet.natural_resources} location={Planet.location} communication={Planet.communication} ruler={Planet.ruler} /> : null
      } */}


<View style={styles.containerButtons}>

      <TouchableOpacity style={styles.buttonRemove} onPress={() => removePlanet(Planet.id)}>
        <Text style={styles.textButton}>Remove</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonUpdate} onPress={() => updatePlanet(Planet.id)}>
        <Text style={styles.textButton}>🖋️</Text>
      </TouchableOpacity>

</View>
      
      
    </View>

  )

}

export default PlanetDisplay
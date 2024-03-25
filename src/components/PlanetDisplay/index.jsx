import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import PlanetIcon from '../PlanetIcon'
import { useState } from 'react'
import PlanetsCard from '../PlanetsCard'
import { useNavigation } from '@react-navigation/native'



const PlanetDisplay = ({ Planet, removePlanet }) => {


  const [buttonActive, setButtonActive] = useState(false)

  const navigation = useNavigation()

  return (
    <View key={Planet.id} style={styles.planetColor}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PlanetInfo", {Planet, removePlanet})}>
        <PlanetIcon color1={Planet.color1} color2={Planet.color2} />
        <Text style={styles.text}>{Planet.name}</Text>
      </TouchableOpacity>
      {/* {
        buttonActive ? <PlanetsCard color1={Planet.color1} color2={Planet.color2} name={Planet.name} conquest={Planet.conquest} population={Planet.population} settlements={Planet.settlements} natural_resources={Planet.natural_resources} location={Planet.location} communication={Planet.communication} ruler={Planet.ruler} /> : null
      } */}


      <TouchableOpacity style={styles.button} onPress={() => removePlanet(Planet.id)}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>

  )

}

export default PlanetDisplay
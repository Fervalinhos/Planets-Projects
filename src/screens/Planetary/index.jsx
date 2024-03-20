import { View, Text, ScrollView } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { PlanetData } from '../../data/PlanetData'

import Planet from '../../models/Planet'
import Planets from '../../models/Planets'
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

const PlanetList = new Planets()


export default function Planetary() {

  const navigation = useNavigation()

  const [Planet, setPlanet] = useState(PlanetData)

  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [name, setName] = useState('')
  const [conquest, setConquest] = useState('')
  const [population, setPopulation] = useState('')
  const [settlements, setSettlements] = useState('')
  const [natural_resources, setNatural_resources] = useState('')
  const [location, setLocation] = useState('')
  const [communication, setCommunication] = useState('')
  const [ruler, setRuler] = useState('')

  const [planets, setPlanets] = useState([])

  const createPlanet = () => {
    const newPlanet = new Planet(color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler)

    PlanetList.addPlanet(newPlanet)
    setPlanets(PlanetList.getPlanets())

    clearFillds()

    return newPlanet;
  }

  const clearFillds = () => {
    setColor1('')
    setColor2('')
    setName('')
    setConquest('')
    setPopulation('')
    setSettlements('')
    setNatural_resources('')
    setLocation('')
    setCommunication('')
    setRuler('')
  }



  return (
    <View style={styles.container}>
      <Title title="Profile -- 🚀😃" />


      <ScrollView>


        {
          Planets ? Planets.map((Planet) => (
            <View key={Planet.id} style={styles.planet}>
              <Text style={styles.text}>{Planet.name}</Text>
              <Text style={styles.text}>{Planet.conquest}</Text>
              <Text style={styles.text}>{Planet.population}</Text>
              <Text style={styles.text}>{Planet.settlements}</Text>
              <Text style={styles.text}>{Planet.natural_resources}</Text>
              <Text style={styles.text}>{Planet.location}</Text>
              <Text style={styles.text}>{Planet.communication}</Text>
              <Text style={styles.text}>{Planet.ruler}</Text>
            </View>
          )) : <Text style={styles.text}>No Planets</Text>
        }


      </ScrollView>

    </View>
  )
}
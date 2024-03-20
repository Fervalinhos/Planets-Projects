import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { PlanetData } from '../../data/PlanetData'

import Planet from '../../models/Planet'
import Planets from '../../models/Planets'
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import PlanetIcon from '../../components/PlanetIcon'

const PlanetList = new Planets()
PlanetList.addPlanet(PlanetData)


export default function Planetary() {

  console.log(planets);
  console.log(PlanetList);

  const navigation = useNavigation()

  const [PlanetData, setPlanetData] = useState(PlanetData)

  const [color1, setColor1] = useState('')
  const [color2, setColor2] = useState('')
  const [name, setName] = useState('')
  const [conquest, setConquest] = useState('')
  const [population, setPopulation] = useState('')
  const [settlements, setSettlements] = useState('')
  const [natural_resources, setNatural_resources] = useState('')
  const [location, setLocation] = useState('')
  const [communication, setCommunication] = useState('')
  const [ruler, setRuler] = useState('');

  const [planets, setPlanets] = useState(PlanetList.planets);

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

        <View style={styles.inputsContainer}>

          <TextInput
            placeholder="Escolha a primeira cor de seu planeta"
            style={styles.userInput}
            onChangeText={setColor1}
            value={color1}
          />

          <TextInput
            placeholder="Escolha a segunda cor de seu planeta"
            style={styles.userInput}
            onChangeText={setColor2}
            value={color2}
          />

          <TextInput
            placeholder="Nome do planeta"
            style={styles.userInput}
            onChangeText={setName}
            value={name}
          />


          <TextInput
            placeholder="Conquista"
            style={styles.userInput}
            onChangeText={setConquest}
            value={conquest}
          />


          <TextInput
            placeholder="População"
            style={styles.userInput}
            onChangeText={setPopulation}
            value={population}
          />

          <TextInput
            placeholder="Assentamentos"
            style={styles.userInput}
            onChangeText={setSettlements}
            value={settlements}
          />

          <TextInput
            placeholder="Recursos Naturais"
            style={styles.userInput}
            onChangeText={setNatural_resources}
            value={natural_resources}
          />

          <TextInput
            placeholder="Localização"
            style={styles.userInput}
            onChangeText={setLocation}
            value={location}
          />

          <TextInput
            placeholder="Comunicação"
            style={styles.userInput}
            onChangeText={setCommunication}
            value={communication}
          />

          <TextInput
            placeholder="Ruler"
            style={styles.userInput}
            onChangeText={setRuler}
            value={ruler}
          />

          <TouchableOpacity style={styles.button} onPress={createPlanet}>
            <Text>Criar Planeta</Text>
          </TouchableOpacity>

        </View>


        {
          planets.length > 0 ? planets.map((Planet) => (
            <PlanetIcon Planet={Planet} PlanetInfo={planets} />
          )) : (
            <Text style={styles.text}>No Planets</Text>
          )
        }


      </ScrollView>

    </View>
  )
}
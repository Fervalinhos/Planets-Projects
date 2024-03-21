import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { PlanetData } from '../../data/PlanetData'

import Planet from '../../models/Planet'
import Planets from '../../models/Planets'
import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import PlanetDisplay from '../../components/PlanetDisplay'
import Inputs from '../../components/Inputs'

const PlanetList = new Planets()
PlanetList.addPlanet(PlanetData)


export default function Planetary() {

  console.log(planets);
  console.log(PlanetList);
  

  const navigation = useNavigation()


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

  const removePlanet = (id) => {
    PlanetList.removePlanet(id)
    setPlanets(PlanetList.getPlanets())
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

          <Inputs placeholder={"Escolha a primeira cor de seu planeta"} value={color1} onChangeText={setColor1} />
          <Inputs placeholder={"Escolha a segunda cor de seu planeta"} value={color2} onChangeText={setColor2} />
          <Inputs placeholder={"Nome do planeta"} value={name} onChangeText={setName} />
          <Inputs placeholder={"Conquista"} value={conquest} onChangeText={setConquest} />
          <Inputs placeholder={"População"} value={population} onChangeText={setPopulation} />
          <Inputs placeholder={"Assentamentos"} value={settlements} onChangeText={setSettlements} />
          <Inputs placeholder={"Recursos Naturais"} value={natural_resources} onChangeText={setNatural_resources} />
          <Inputs placeholder={"Localização"} value={location} onChangeText={setLocation} />
          <Inputs placeholder={"Comunicação"} value={communication} onChangeText={setCommunication} />
          <Inputs placeholder={"Ruler"} value={ruler} onChangeText={setRuler} />

          <TouchableOpacity style={styles.button} onPress={createPlanet}>
            <Text>Criar Planeta</Text>
          </TouchableOpacity>

        </View>


        {
          planets.length > 0 ? planets.map((Planet) => (
            <PlanetDisplay Planet={Planet} removePlanet={removePlanet} />
          )) : (
            <Text style={styles.text}>No Planets</Text>
          )
        }


      </ScrollView>

    </View>
  )
}
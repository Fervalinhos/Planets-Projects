import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { PlanetData } from '../../data/PlanetData'

import Planet from '../../models/Planet'
import Planets from '../../models/Planets'
import { useState, useEffect } from 'react'



import PlanetDisplay from '../../components/PlanetDisplay'
import Inputs from '../../components/Inputs'


import DateTimePicker from '@react-native-community/datetimepicker';

const PlanetList = new Planets()
PlanetList.addPlanet(PlanetData)


export default function Planetary() {

  console.log(planets);
  console.log(PlanetList);





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
  const [planetId, setPlanetId] = useState('');
  const [dispaly, setdispaly] = useState(false)


  const [planets, setPlanets] = useState(PlanetList.planets);

  const [update, setUpdate] = useState(false)
  const [msg, setMsg] = useState('')

  const inputDisplay = () => {
    setdispaly(!dispaly)
  }





  const createPlanet = () => {

    if (update) {
      PlanetList.upadatePlanet(planetId, color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler)
      setUpdate(false)
      setdispaly(!dispaly)
      clearFillds()
    } else if (validateFields()) {


      const newPlanet = new Planet(color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler)

      PlanetList.addPlanet(newPlanet)
      setPlanets(PlanetList.getPlanets())

      clearFillds()
      setdispaly(!dispaly)
      setMsg('Planeta criado com sucesso!')

      return newPlanet;
    } else {
      return false
    }
  }

  const removePlanet = (id) => {
    PlanetList.removePlanet(id)
    setPlanets(PlanetList.getPlanets())
  }

  const updatePlanet = (id) => {
    const planet = PlanetList.getPlanet(id)
    setdispaly(!dispaly)


    console.log(planet);

    setColor1(planet.color1)
    setColor2(planet.color2)
    setName(planet.name)
    setConquest(planet.conquest)
    setPopulation(planet.population)
    setSettlements(planet.settlements)
    setNatural_resources(planet.natural_resources)
    setLocation(planet.location)
    setCommunication(planet.communication)
    setRuler(planet.ruler)
    setPlanetId(id);
    setUpdate(true)
  }


  useEffect(() => {
    setPlanets(PlanetList.getPlanets())
  }, [PlanetList.planets])

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

  const validateFields = () => {
    if (color1 === '' || color2 === '' || name === '' || conquest === '' || population === '' || settlements === '' || natural_resources === '' || location === '' || communication === '' || ruler === '') {
      setMsg('Preencha todos os campos!')
      timer()
      return false
    }
    return true
  }

  const timer = () => {
    setTimeout(() => {
      setMsg('')
    }, 3000)
  }
  
const [date, setDate] = useState(new Date());
const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setConquest(currentDate.toLocaleDateString())
    setShowDatePicker(false);
  };

  const dataPiecker = () => {
    setShowDatePicker(true);
  }







  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Title title="Planetary" />

        <Text style={styles.title}>Descrição</Text>

        <Text style={styles.textDescripition}>Planetary é um aplicativo que simula a criação de planetas, onde você pode criar, editar e remover planetas, além de visualizar informações detalhadas ao clicar em cada planeta.</Text>



        {
          dispaly ? (
            <View style={styles.inputsContainer}>

              <TouchableOpacity style={styles.buttonClose} onPress={inputDisplay}>
                <Text style={styles.textButton}>Fechar</Text>
              </TouchableOpacity>


              {
                showDatePicker && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )
              }

              <TouchableOpacity style={styles.inputDate} onPress={dataPiecker}>
                <Text>{date.toLocaleDateString()}</Text>
              </TouchableOpacity>

              <Inputs placeholder={"Escolha a primeira cor de seu planeta"} value={color1} onChangeText={setColor1} />
              <Inputs placeholder={"Escolha a segunda cor de seu planeta"} value={color2} onChangeText={setColor2} />
              <Inputs placeholder={"Nome do planeta"} value={name} onChangeText={setName} />
              {/* <Inputs placeholder={"Conquista"} value={conquest} onChangeText={setConquest} /> */}
              <Inputs placeholder={"População"} value={population} onChangeText={setPopulation} />
              <Inputs placeholder={"Assentamentos"} value={settlements} onChangeText={setSettlements} />
              <Inputs placeholder={"Recursos Naturais"} value={natural_resources} onChangeText={setNatural_resources} />
              <Inputs placeholder={"Localização"} value={location} onChangeText={setLocation} />
              <Inputs placeholder={"Comunicação"} value={communication} onChangeText={setCommunication} />
              <Inputs placeholder={"Ruler"} value={ruler} onChangeText={setRuler} />

              {
                msg ?

                  <View style={styles.msgErrorContainer}>
                    <Text style={styles.msgError}>{msg}</Text>
                  </View> : null
              }

              <TouchableOpacity style={styles.buttonCreate} onPress={createPlanet}>
                {
                  update ? <Text style={styles.UpdCreaButton}>Editar</Text> : <Text style={styles.UpdCreaButton}>Criar</Text>
                }
              </TouchableOpacity>

            </View>
          ) :
            <TouchableOpacity style={styles.buttonOpen} onPress={inputDisplay}>
              <Text style={styles.textButton}>Crie seu Planeta 🚀😃</Text>
            </TouchableOpacity>
        }


        {
          planets.length > 0 ? planets.map((Planet) => (
            <PlanetDisplay Planet={Planet} removePlanet={removePlanet} updatePlanet={updatePlanet} />
          )) : (
            <Text style={styles.text}>No Planets</Text>
          )
        }


      </ScrollView>

    </View>
  )
}
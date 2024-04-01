import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import PlanetIcon from '../PlanetIcon'

const PlanetsCard = ({ id, color1, color2, name, conquest, population, settlements, natural_resources, location, communication, ruler }) => {
    return (
        <View style={styles.container} key={id}>
            <PlanetIcon color1={color1} color2={color2} />

            <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textConquest}>{conquest}</Text>
            <Text style={styles.textPopulation}>{population}</Text>
            <Text style={styles.textSettlements}>{settlements}</Text>
            <Text style={styles.textNatural_resources}>{natural_resources}</Text>
            <Text style={styles.textLoocation}>{location}</Text>
            <Text style={styles.textCommunication}>{communication}</Text>
            <Text style={styles.textRuler}>{ruler}</Text>
        </View>
    )
}

export default PlanetsCard
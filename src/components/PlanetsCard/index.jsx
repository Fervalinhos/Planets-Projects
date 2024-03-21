import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const PlanetsCard = ({ name, conquest, population, settlements, natural_resources, location, communication, ruler }) => {
    return (
        <View>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{conquest}</Text>
            <Text style={styles.text}>{population}</Text>
            <Text style={styles.text}>{settlements}</Text>
            <Text style={styles.text}>{natural_resources}</Text>
            <Text style={styles.text}>{location}</Text>
            <Text style={styles.text}>{communication}</Text>
            <Text style={styles.text}>{ruler}</Text>
        </View>
    )
}

export default PlanetsCard
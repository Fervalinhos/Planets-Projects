import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const PlanetIcon = ({ color1, color2 }) => {
    return (
        <View style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: `${color1}`,
            overflow: 'hidden',
            position: 'relative',
            borderColor: 'black',
            borderWidth: 2,
        }}>
            <View style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: `${color2}`,
                position: 'absolute',
                right: 15,
            }} />
        </View>
    )
}

export default PlanetIcon
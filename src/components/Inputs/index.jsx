import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const Inputs = ({ placeholder, onChangeText, value }) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    )
}

export default Inputs
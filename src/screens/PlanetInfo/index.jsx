import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PlanetsCard from '../../components/PlanetsCard'
import Planets from '../../models/Planets'
import { useNavigation } from '@react-navigation/native'

export default function PlanetInfo({ route }) {

    const Planet = route.params
    const navigation = useNavigation()

    const deletePlanet = () => {
        Planets.removePlanet(Planet.id)
        navigation.navigate("Planetary")
    }
    


    console.log(Planet);

    return (
        <View>
            <PlanetsCard color1={Planet.color1} color2={Planet.color2} name={Planet.name} conquest={Planet.conquest} population={Planet.population} settlements={Planet.settlements} natural_resources={Planet.natural_resources} location={Planet.location} communication={Planet.communication} ruler={Planet.ruler} />

            <TouchableOpacity style={styles.button} onPress={() => deletePlanet()}>
                <Text>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}
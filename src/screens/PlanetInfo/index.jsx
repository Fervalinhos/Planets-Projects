import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './styles'
import PlanetsCard from '../../components/PlanetsCard'
import Planets from '../../models/Planets'
import { useNavigation } from '@react-navigation/native'

export default function PlanetInfo({ route }) {

    const { Planet, removePlanet, updatePlanet } = route.params
    const navigation = useNavigation()


    const DeletePlanet = () => {
        removePlanet(Planet.id)
        navigation.navigate('Planetary')
    }

    const UpdatePlanet = () => {
        updatePlanet(Planet.id)
        navigation.navigate('Planetary')
    }


    console.log(Planet);

    return (
        <ScrollView style={styles.container}>
            {
                Planet ? (
                    <View>
                        <PlanetsCard color1={Planet.color1} color2={Planet.color2} name={Planet.name} conquest={Planet.conquest} population={Planet.population} settlements={Planet.settlements} natural_resources={Planet.natural_resources} location={Planet.location} communication={Planet.communication} ruler={Planet.ruler} />

                        <TouchableOpacity style={styles.button} onPress={() => DeletePlanet()}>
                            <Text>Remove</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={() => UpdatePlanet()}>
                            <Text>Update</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <View>
                        <Text>Planet not found</Text>
                    </View>
                )
            }
        </ScrollView>

    )
}
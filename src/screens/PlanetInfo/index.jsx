import { View, Text } from 'react-native'
import styles from './styles'
import PlanetsCard from '../../components/PlanetsCard'

export default function PlanetInfo({ route }) {

    const Planet = route.params

    
    console.log(Planet + "PlanetInfo");

    return (
        <View>
            <PlanetsCard color1={Planet.color1} color2={Planet.color2} name={Planet.name} conquest={Planet.conquest} population={Planet.population} settlements={Planet.settlements} natural_resources={Planet.natural_resources} location={Planet.location} communication={Planet.communication} ruler={Planet.ruler} />
        </View>
    )
}
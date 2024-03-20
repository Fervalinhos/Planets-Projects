import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { useNavigation } from '@react-navigation/native'
import { Planet } from '../../data/PlanetData'



export default function Home() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Title title="Home -- 🤐😅" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Planetary", {Planet})}>
        <Text style={styles.text}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
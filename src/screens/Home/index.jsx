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

      <View style={styles.details}>
        <Text style={styles.text}>Este é um aplicativo React Native chamado "Planetary". Ele permite aos usuários criar, editar e remover planetas. Cada planeta tem várias propriedades, incluindo cores, nome, conquista, população, assentamentos, recursos naturais, localização, comunicação e governante.</Text>
        <Text style={styles.text}>O aplicativo começa com uma lista de planetas pré-definidos, que é armazenada em PlanetList. Os usuários podem adicionar novos planetas a esta lista ou atualizar planetas existentes. Quando um planeta é criado ou atualizado, os campos de entrada são limpos e a lista de planetas é atualizada.</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.text}>O aplicativo tem três telas principais: Home, Planetary e About. A tela Home é a tela inicial do aplicativo. A tela Planetary exibe uma lista de planetas e permite aos usuários adicionar, remover e atualizar planetas. A tela About exibe informações sobre o desenvolvedor e as tecnologias utilizadas no aplicativo.</Text>
        <Text style={styles.text}>O aplicativo também tem uma tela de informações detalhadas para cada planeta. Esta tela exibe todas as propriedades do planeta e permite aos usuários remover ou atualizar o planeta.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Planetary", { Planet })}>
        <Text style={styles.buttonText}>Veja o Planetario</Text>
      </TouchableOpacity>
    </View>
  )
}
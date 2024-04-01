import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Sobre mim" />

      <Text style={styles.text}>
        Meu nome é Matheus H. C. Côcco, tenho 17 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Atualmente, estou estudando React Native e Node.js.
      </Text>

      <Text style={styles.text}>
        Esse é um projeto de um aplicativo de gerenciamento de planetas, onde é possível adicionar, remover e editar planetas.
      </Text>

      <View style={styles.technologies}>
        <Text style={styles.text}>Tecnologias utilizadas:</Text>
        <Text style={styles.text}>React Native</Text>
        <Text style={styles.text}>Node.js</Text>
        <Text style={styles.text}>Express</Text>
        <Text style={styles.text}>SQLite</Text>
        </View>
  


        


    </View>
  )
}
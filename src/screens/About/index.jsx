import { View, Text, Link } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'
import { Octicons, FontAwesome5, FontAwesome, Ionicons, AntDesign, FontAwesome6 } from '@expo/vector-icons';


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
        <View style={styles.containerTechnologies}>
        <Octicons name="mark-github" size={24} color="black" />
        <FontAwesome5 name="linkedin" size={24} color="black" />
        <FontAwesome name="css3" size={24} color="black" />
        <Ionicons name="logo-javascript" size={24} color="black" />
        <AntDesign name="HTML" size={24} color="black" />
        <FontAwesome6 name="node-js" size={24} color="black" />
        <FontAwesome5 name="react" size={24} color="black" />
      </View>
      </View>


      <View>

        


      </View>






    </View>
  )
}
import { Text, View } from 'react-native'

import { styles } from './styles'
import Container from '../../components/Container'

function Home() {
  return (
    <Container>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </Container>
  )
}

export default Home

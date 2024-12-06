import {SafeAreaView, ScrollView, View} from 'react-native';
import {estilos} from './assets/CSS/estilos'
import ListaCompras from './components/ListaCompras'

export default function App() {
  
  return (
    
    <SafeAreaView style={estilos.container} >
      <ScrollView>
        <View>
          
        <ListaCompras/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
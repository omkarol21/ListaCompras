import { Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {estilos} from '../assets/CSS/estilos'
import {useState} from 'react'

export default function ListaCompras(props){
  var [item1, setItem1] = useState('')
  var [item2, setItem2] = useState('')
  var [item3, setItem3] = useState('')
  

  return(
    <View>

      <View style={estilos.tituloConjunto}>
        <Image style={estilos.img} source={require('../assets/IMG/IconLista.png')}/>
        <Text style={estilos.titulo}>Lista de Compras</Text>
      </View>  

      <Text style={estilos.text}>Adicione um item:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setItem1} 
        value={item1} 
        placeholder='📝 Ex: Máscara de cílios... ' 
      keyboardType='text'/>

      <Text style={estilos.text}>Adicione um item:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setItem2} 
        value={item2} 
        placeholder='📝 Ex: Base... ' 
      keyboardType='text'/>

      <Text style={estilos.text}>Adicione um item:</Text>
      <TextInput
        style={estilos.input}
        onChangeText={setItem3} 
        value={item3} 
        placeholder='📝 Ex: Pó Compacto... ' 
      keyboardType='text'/>


      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textB}>Adicionar</Text>
      </TouchableOpacity>

      <View style={estilos.lista}>
        <Image style={estilos.icon} source={require('../assets/IMG/IconListaCompras.png')}/>
        <Text style={estilos.itemLista}>• {item1}</Text>
        <Text style={estilos.itemLista}>• {item2}</Text>
        <Text style={estilos.itemLista}>• {item3}</Text>
      </View>

    </View>
  )
}
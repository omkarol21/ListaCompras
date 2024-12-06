import {StyleSheet} from 'react-native'

export const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5EDE0'
  },

  titulo: {
    fontSize: 24,
    fontFamily: 'Cooper Black',
    color: '#334EAC',
    alignSelf: 'center',
    marginBottom: 22
  },

  img: {
    width: 60,
    height: 60,
    marginTop: -20,
    marginRight: 10
  },

  tituloConjunto: {
    flexDirection: 'row',
    marginTop: 30
  },

  text: {
    fontSize: 16,
    fontFamily: 'Berlin Sans FB',
    marginLeft: 15,
  },

  input: {
    width: 300,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#334EAC',
    padding: 15,
    marginTop: 10,
    marginBottom: 30,
  },

  botao: {
    width: 180,
    height: 45,
    backgroundColor: '#334EAC',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 60
  },

  textB: {
    fontSize: 18,
    fontFamily: 'Cooper Black',
    alignSelf: 'center',
    color: '#FFF'
  },

  icon: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginTop: -35,
    marginBottom: 15,
  },

  lista: {
    backgroundColor: '#334EAC',
    width: 300,
    height: 165,
    borderRadius: 20,
  },

  itemLista: {
    fontSize: 16,
    fontFamily: 'Berlin Sans FB',
    marginLeft: 45,
    color: '#FFF',
    marginBottom: 10,
  }
})
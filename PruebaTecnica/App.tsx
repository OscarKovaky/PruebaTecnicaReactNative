

import axios, { AxiosResponse } from 'axios';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import ContentPokemonSuccess from './components/MainContent';
import ContentPokemonError from './components/ContentPokemonError';

import { PokemonResponse,PokemonRequest, MessageApi } from './Models/Pokemon';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isCallDefault,setCallDefault ]= useState(0)
  const [text, onChangeText] = useState("");
  const [pokeData,setpokeData] = useState<PokemonResponse>({
    nombre: "",
    experiencia:0,
    img: "",
    hp: 0,
    ataque: 0,
    defensa:0,
    especial_ataque:0,
    especial_defensa:0,
    velocidad: 0,
  })

  const [responseApi,setResponseApi] = useState<MessageApi>({
    MessageData:'',
    SignalEvent:false
  })

  const [pokeRequest,setPokeRequest] = useState<PokemonRequest>({
    nombre:""
  })



  useEffect(() => {

      SearchPokemon()
  }, [])

  const SearchPokemon = ()=> {
    
    if(isCallDefault === 0){
      pokeRequest.nombre = "pikachu"
      setCallDefault(1)
    }else{
      pokeRequest.nombre = text;
    }

    axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${pokeRequest.nombre.toLowerCase()}`,{ headers: { Accept: "application/json" }}).then((response: AxiosResponse) =>
          {
            if(response.status === 200){
              
            const RESPONSE_API_SECCESS = "Success" ;
            setResponseApi({
              MessageData:RESPONSE_API_SECCESS,
              SignalEvent:true
            })  
            setpokeData({nombre: response.data.name,
              experiencia:response.data.base_experience,
              img: response.data.sprites.front_default,
              hp: response.data.stats[0].base_stat,
              ataque: response.data.stats[1].base_stat,
              defensa:response.data.stats[2].base_stat,
              especial_ataque:response.data.stats[3].base_stat,
              especial_defensa:response.data.stats[4].base_stat,
              velocidad: response.data.stats[5].base_stat,})
            }
          }).catch(err => {
            const RESPONSE_API_ERROR = "Error" ;
            if(err.data === undefined){
              setResponseApi({
                MessageData:RESPONSE_API_ERROR,
                SignalEvent:false
              })
                AnimationReset();
            }
          })
  }

  const AnimationReset = () =>{
    setTimeout(() => {
      setResponseApi({MessageData:"",SignalEvent:true})
    }, 2500)
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const getstyle = (val:boolean) => {
    if (val) {
        return { borderColor: 'green' };
    }
    else {
        return { borderColor: 'red' };
    }
}


const getstyleButtom = (val:boolean) => {
  if (val) {
      return { 
        width:70,
        height:70,
        backgroundColor: 'green', };
  }
  else {
      return { 
        width:50,
        height:50,
        backgroundColor: 'yellow', };
  }
}

  return (
    <View style={{
      flex:1,
      flexDirection: "column",
      height: Dimensions.get ('window').width,
    }}>

      <View style={{ backgroundColor: "red", flex: 0.2 }} >
        <View  style={{
              flexDirection: "row",justifyContent:'space-around',padding:50}}>
          <View style={[styles.circulo,getstyleButtom(responseApi.SignalEvent) ]}>
            
          </View>
          <View style={[styles.circulo,getstyleButtom(responseApi.SignalEvent) ]}>
          
          </View>
          <View style={[styles.circulo,getstyleButtom(responseApi.SignalEvent) ]}>
          
          </View>
        </View>
      </View>
      <View style={{backgroundColor: "red", flex: 0.7 }} >
          {responseApi.SignalEvent ?
               <ContentPokemonSuccess
               nombre= {pokeData.nombre}
               experiencia = {pokeData.hp}
               img = {pokeData.img}
               hp = {pokeData.hp}
               ataque = {pokeData.ataque}
               defensa ={pokeData.defensa}
               especial_ataque ={pokeData.especial_ataque}
               especial_defensa = {pokeData.especial_defensa}
               velocidad = {pokeData.velocidad}
             />
          :
          <ContentPokemonError mensaje='Error'/> 
          }
 

      </View>

      <View style={{ backgroundColor: "red", flex: 0.2 }}>
      <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20
            }}
          >
      <View style={{flex: 0.8 }}>
          <TextInput
              style={[styles.input,getstyle(responseApi.SignalEvent)]}
              onChangeText={onChangeText}
              value={text}
              placeholder="Buscar Pokemon.. nombre o ID "
            />
          </View>
      <View style={{flex: 0.2 }} >
          <TouchableOpacity
                style={[styles.circulo,getstyleButtom(responseApi.SignalEvent)]}
                onPress={SearchPokemon}>
          </TouchableOpacity>      
      </View>
    
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    shadowColor: "black",
    backgroundColor: "white"
  },
  circulo: {
    borderRadius:50,
    borderWidth:2
  },
  button: {
    width:70,
    height:70,
    borderRadius:50,
    backgroundColor: 'green',
    borderWidth:1

  }
});

export default App;


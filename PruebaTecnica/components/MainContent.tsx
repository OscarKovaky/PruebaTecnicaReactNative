import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";


export type PropsMain = {
    nombre: string
    experiencia:number
    img: string
    hp: number
    ataque: number
    defensa:number
    especial_ataque:number
    especial_defensa:number
    velocidad: number
  };


  const styles = StyleSheet.create({
    tinyLogo: {
      width: 150,
      height: 150
    },
    h1:{
        fontSize: 32
    },
    h3:{
        fontSize: 16
    }
  });
  

const ContentPokemonSuccess: React.FC<PropsMain> = ({
    nombre,
    experiencia = 0,
    img,
    hp = 0,
    ataque = 0,
    defensa = 0,
    especial_ataque = 0,
    especial_defensa = 0,
    velocidad = 0
}) => {
  return (
    <View
      style={{
        flex:1,
        flexDirection: "column",
        backgroundColor: 'white',
        paddingTop:30,
        paddingBottom:20,
        paddingRight:30,
        paddingLeft:30,
        borderWidth:1,
        borderRadius:40,
        borderStyle:'solid',
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        marginTop:10}}>
        <View />
                <View
                style={{
                    flexDirection: "row",
                    padding: 40,
                    justifyContent:'center'}}>
                <Text style={styles.h1}>{nombre}</Text>
        </View>
    <View
      style={{
        flex:1,
        flexDirection: "row"}}>
            <View style={{flex: 0.5 }}>
                <View
                    style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center',
                        flexDirection: "column"}}>
                    <Image style={styles.tinyLogo} 
                     source = {{
                        uri: img
                     }}
                    />
            </View>
      </View>
      <View style={{flex: 0.5 }} >
                <View
                    style={{
                        flex:1,
                        paddingTop:100,
                        flexDirection: "column",}}>
                <Text style={styles.h3}>Hp:{hp}</Text>
                <Text style={styles.h3}>Experience:{experiencia}</Text>
                <Text style={styles.h3}>Attack:{ataque}</Text>
                <Text style={styles.h3}>Defense:{defensa}</Text>
                <Text style={styles.h3}>Special-Attack:{especial_ataque}</Text>
                <Text style={styles.h3}>Special-Defense:{especial_defensa}</Text>
                <Text style={styles.h3}>Speed:{velocidad}</Text>
                </View>
      </View>
    </View>
    </View>
  );
};

export default ContentPokemonSuccess;
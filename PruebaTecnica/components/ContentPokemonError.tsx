import React from "react";
import { StyleSheet, Text, View } from "react-native";


export type PropsMainError = {
    mensaje: string
  };



  const ContentPokemonError: React.FC<PropsMainError> = ({
    mensaje,
}) => {
  return (
  <View style={styles.container}>
         <Text style={styles.text}>Pokemon no encontrado, ingrese el nombre del pokemon correctamente</Text>
  </View>  
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "row",
        paddingTop:30,
        paddingBottom:20,
        paddingRight:30,
        paddingLeft:30,
        borderWidth:10,
        borderStyle:'dashed',
        marginBottom:10,
        marginRight:10,
        marginLeft:10,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 32
    }
  });




export default ContentPokemonError;
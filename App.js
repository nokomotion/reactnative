import React, { useState } from 'react';
import { StyleSheet, View, Text,Button,Alert,SafeAreaView, TextInput,ImageBackground } from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };


const App = () => {
  const [name, setName] = useState('');
  const [kilometros, setkilometros] = useState('');
  const [correo, setcorreo] = useState('');

  return (
      <View style={estilo.container}>
    <ImageBackground source={image} style={estilo.image}>
      <Text style={estilo.text}>Inside</Text>
    </ImageBackground>
  
  
      
        <Text>Nombre:</Text>

        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          placeholder={'Ingresa tu nombre'}
          style={estilo.input}
        />

        <View style={{height:30}}/>

        <Text>Correo:</Text>
        <TextInput
          value={correo} 
          onChangeText={(correo) => setcorreo(correo)}
          placeholder={'Ingresa tu correo'}
          style={estilo.input}
        />
            <View style={{height:30}}/>
            <Text>Kilometros:</Text>
         <TextInput
          value={kilometros} keyboardType='numeric'
          onChangeText={(kilometros) => setkilometros(kilometros)}
          placeholder={'Ingresa los kilometros'}
          style={estilo.input}
        />
      <Button
        title="suma"
        onPress={() => Alert.alert()}
      />
        <Text style={{color: 'blue'}}>{kilometros}</Text>
      </View>
    
  );
};


const estilo =StyleSheet.create({
  container:{
    flex:1,    
    justifyContent:'center'
  },
  subcontaier:{
      height:50,
      width:'100%',
      flexDirection:"row",
      paddingHorizontal: 10

  },
  texto:{
    
    borderBottomWidth:1,
  
  

  },
  input: {
  height: 70,
  backgroundColor: '#ffffff',
  paddingLeft: 15,
  paddingRight: 15,
  borderBottomWidth:2
},
image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  btn:{
    width:50,
    height:50,
    borderRadius:5,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:"red"
  },
  btntxt:{
    fontSize:25,
    color:"blue",
    fontWeight:'bold'
  },
  counterContainer:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  contador:{
    color:'white',
    fontSize:50
  }
  
  });

export default App;
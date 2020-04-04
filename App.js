import React, {Component} from 'react';
import {View, Text, StyleSheet,Image,Button,TextInput,
ImageBackground} from 'react-native'
import {Video} from 'expo-av';
class cursoReactNative extends Component{

    alerta = () => {
        alert("olá")
    }
  render(){
      return(

        <ImageBackground source={require("./assets/fundo.jpg")} style = {styles.container}>
            
            <View style = {styles.header}>
                <View style = {styles.headerLeft}>
                    <Image style = {styles.imageHeader} source={require("./assets/github.jpg")}/>
                </View>
                <View style = {styles.headerRight}>
                    <Button style = {styles.buttonHeader} title="log in" onPress={this.alerta}/>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.mensagemCentral}>
                    <Text style={styles.textoCentral}>
                        BEM VINDO A MINHA PRIMEIRA APLICAÇÃO MOBILE
                    </Text>
                    <TextInput 
                        placeholder="digite seu nome" 
                        placeholderTextColor='white'
                        maxLenght={10}
                        style={{borderWidth:1,borderColor:'white',
                            padding:5,margin:10}}
                    ></TextInput>
                </View>
                <Video
                    source={require("./assets/tryhtml.mp4")}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay={false}
                    useNativeControls={true}
                    isLooping
                    style={{ width: 300, height: 300 }}
                />
            </View>
            <View style={styles.rodape}>
                <View style = {styles.rodapeInicial}>
                    <Text style={styles.textRodape}>olá</Text>
                </View>
                <View style = {styles.rodapeCentro}>
                    <Text style={styles.textRodape}>bem vindo</Text>
                </View>
                <View style={styles.rodapeFinal}>
                    <Image style={styles.ImageRodape} source = {require("./assets/githubrodape.jpg")} />
                </View>
            </View>
        </ImageBackground>
      )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        marginTop:40,
        backgroundColor:"green"
    },
    header:{
        flex:0,
        // backgroundColor:'red',
        flexDirection:'row',
        marginTop:10
    },
    headerLeft:{
        flex:1,
        // backgroundColor:'blue',
    },
    imageHeader:{
        flex:0.95,
        width:75,
        marginTop:2,
        resizeMode:'contain',
        borderRadius: 110
    },
    headerRight:{
        flex:1
    },
    buttonHeader:{
        flex:1,
        borderRadius:50
    },
    body:{
        marginTop:20,
        flex:9,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    textoCentral:{
        color:'white'
    },
    rodape:{
        flex:1,
        flexDirection:'row',
        marginBottom:20
    },
    rodapeInicial:{
        flex:1,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        color:'white'
    },
    rodapeCentro:{
        flex:1,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    rodapeFinal:{
        flex:1,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    textRodape:{
        color:'white',
        fontSize:20
    },
    ImageRodape:{
        marginTop:5,
        flex:1,
        width:60,
        borderRadius: 20
    }
})

export default cursoReactNative
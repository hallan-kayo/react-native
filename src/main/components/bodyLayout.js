import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'
import {Video} from 'expo-av'

function Body(){

    return(
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
                source={require("../../../assets/tryhtml.mp4")}
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
    )
}

const styles = StyleSheet.create({
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
})

export default Body
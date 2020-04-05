import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

function Footer(){

    return(
        <View style={styles.rodape}>
            <View style = {styles.rodapeInicial}>
                <Text style={styles.textRodape}>olá</Text>
            </View>
            <View style = {styles.rodapeCentro}>
                <Text style={styles.textRodape}>bem vindo</Text>
            </View>
            <View style={styles.rodapeFinal}>
                <Image style={styles.ImageRodape} source = {require("../../../assets/githubrodape.jpg")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default Footer
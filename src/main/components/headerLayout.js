import React from 'react'
import {View,Image,Button,StyleSheet,Alert} from 'react-native'

function Header(){

    login = () =>{Alert.alert("hello world")}

    return(
        <View style = {styles.header}>
            <View style = {styles.headerLeft}>
                <Image style = {styles.imageHeader} source={require("../../../assets/github.jpg")}/>
            </View>
            <View style = {styles.headerRight}>
                <Button style = {styles.buttonHeader} title="log in" onPress={this.alerta}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
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
    }
})

export default Header
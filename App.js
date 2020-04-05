import React, {Component} from 'react';
import {StyleSheet,ImageBackground} from 'react-native'
//smart components
import Header from './src/main/containers/header'
import Body from './src/main/containers/body'
import Footer from './src/main/containers/footer'


class cursoReactNative extends Component{

  render(){
      return(

        <ImageBackground source={require("./assets/fundo.jpg")} style = {styles.container}>
            <Header/>
            <Body/>
            <Footer/>
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
    }
})

export default cursoReactNative
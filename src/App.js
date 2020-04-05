import React, {Component} from 'react';
import {StyleSheet,ImageBackground,StatusBar} from 'react-native'
//smart components
import Header from './main/containers/header'
import Body from './main/containers/body'
import Footer from './main/containers/footer'


class cursoReactNative extends Component{

  render(){
      return(

        <ImageBackground source={require("../assets/fundo.jpg")} style = {styles.container}>
          <StatusBar
            //estilo da barra de status: enum(default,dark-content ou light-content)
            barStyle="light-content"
            backgroundColor='#1B0A2A'
            //esconder barra de status
            hidden={false}
          />
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
        backgroundColor:"green"
    }
})

export default cursoReactNative
import React, {Component} from 'react';
import {StyleSheet,ImageBackground} from 'react-native'
//smart components
import Header from './main/containers/header'
import Body from './main/containers/body'
import Footer from './main/containers/footer'


class cursoReactNative extends Component{

  render(){
      return(

        <ImageBackground source={require("../assets/fundo.jpg")} style = {styles.container}>
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
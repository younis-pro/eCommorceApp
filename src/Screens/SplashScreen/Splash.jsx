import React, { useState } from "react";
import { StyleSheet, View ,Image, Text, StatusBar} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const SplashScreen =(props)=>{
    setTimeout(() => {
        props.navigation.replace("LoginScreen")
      }, 3000);
    return(
        <View style={styles.container}>
            <SafeAreaView>
            <View style={styles.img}>
            <Image style={{width:450,height:900}} source={require("../../../assets/Images/Splash.jpg")}/>
            </View>
            <Image  style ={{alignSelf:"center",marginTop:160}}source={require("../../../assets/Images/logo.png")}/>
            </SafeAreaView>
            <StatusBar/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    img:{
        alignSelf:"center",
        position:"absolute"
    }
})
export default SplashScreen;
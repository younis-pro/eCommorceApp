import React, { useState } from "react";
import {View, Text, Image, StyleSheet,TextInput, SafeAreaView, TouchableOpacity, StatusBar, ScrollView,} from "react-native";
const RegisterScreen =()=>{
    const [name ,setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return(
        <View style={styles.container}>
            <SafeAreaView>
            <View style={styles.img}>
                
                <Image style={{width:420,height:900,opacity: 0.7,}} source={require("../../../assets/Images/Splash2.jpg")}/>
               
            </View>
            <ScrollView>
            <View style={{position:"absolute",marginTop:70,alignSelf:"center",}}>
               <Image style={{ widht:100,height:100 }}
               source={require("../../../assets/Images/logo.png")} />
               </View> 
               
            <View style={styles.emailInput}>
                <TextInput style={{
                alignSelf:"center",width:350,position:"absolute",
                borderBottomWidth:2,
                borderBottomColor:"white",
                fontSize:20,
                color:"white"

                
                }} placeholder="Name" placeholderTextColor={"white"} onChangeText={name => setName(name)} 
                defaultValue={name} />
                <TextInput style={{
                alignSelf:"center",width:350,position:"absolute",
                borderBottomWidth:2,
                borderBottomColor:"white",
                fontSize:20,
                color:"white",
                marginTop:100


                
                }} placeholder="Email" placeholderTextColor={"white"} onChangeText={email => setEmail(email)} 
                defaultValue={email} />

                <TextInput style={{
                alignSelf:"center",width:350,position:"absolute",
                borderBottomWidth:2,
                borderBottomColor:"white",
                fontSize:20,
                marginTop:200,
                color:"white"

                
                }} placeholder="Password" placeholderTextColor={"white"} onChangeText={password => setPassword(password)}
                defaultValue={password} secureTextEntry={true}/>
                <TouchableOpacity style={{marginTop:320,backgroundColor:"white",
                width:350,height:45,borderRadius:20,alignSelf:"center"}}>
                    <Text style={{textAlign:"center",marginTop:8,fontSize:20,color:"black",fontWeight:"bold"}}>Register</Text>
                </TouchableOpacity>
            </View></ScrollView>
           
                
               
            <StatusBar/>
            </SafeAreaView>
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
    },
    emailInput:{
        marginTop:320
    }
})
export default RegisterScreen;
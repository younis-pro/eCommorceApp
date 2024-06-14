import React from "react";
import { DrawerContentScrollView,DrawerItemList, } from "@react-navigation/drawer";
import { ImageBackground ,Image, View,Text } from "react-native";

const CustomDrawer = (props)=>{
    return(
        <View style={{flex:1}}>
            <ImageBackground source={require("../../assets/Images/profile.jpg")}
             style={{width:280,height: 250,alignSelf:'center',}}>

            <Image source={require("../../assets/Images/profile.jpg")} style={{borderRadius: 60,width:100,height: 100,alignSelf:'center',marginTop:100,}} />
            <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:20}}>Muhammad Younis</Text>
           
            </ImageBackground>
        <DrawerContentScrollView {...props}>
            
            <DrawerItemList {...props} >


            </DrawerItemList>
        </DrawerContentScrollView>
        </View>
    )
}
export default CustomDrawer;
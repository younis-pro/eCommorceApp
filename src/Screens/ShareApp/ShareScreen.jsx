import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet,TextInput, SafeAreaView, TouchableOpacity, StatusBar,} from "react-native";

const ShareScreen =({navigation})=>{
   
    return(
        <View style={styles.container}>
            
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
				<View
							style={{ paddingLeft: 20, marginTop: 30, position: 'absolute' }}>
							<Icon name="menu-sharp" size={30}/>
				</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							style={{
								width: 50,
								height: 50,
								borderRadius: 200,
								marginLeft: 340,
								marginTop: 30,
								position: 'absolute'
							}}
							source={require('../../../assets/Images/profile.jpg')}
						/>
					</TouchableOpacity>
					<TouchableOpacity style={{marginTop:400,alignSelf:"center",backgroundColor:"blue",width: "100%",height: 40,}}>
					<Text style={{color:"white",alignSelf:"center",marginTop:8,}}>Share App</Text>  
					</TouchableOpacity>
                    
            
       
            
           
                    <StatusBar/>
                    
                    
        
        </View>
        


    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
   
})
export default ShareScreen;
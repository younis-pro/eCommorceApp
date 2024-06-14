import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet,TextInput, SafeAreaView, TouchableOpacity, StatusBar,} from "react-native";

const CartScreen =({navigation})=>{
   
    return(
        <View style={styles.container}>
			<View>
            
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
					</View>
					<View style={{marginTop:150,alignSelf:"center",backgroundColor:"red",height: 30,borderRadius:20, width: 300,}}>
						<Text style={{color:"white",textAlign:"center",marginTop:5}}>
							You Haven't select any item in Your Cart
						</Text>
					</View>
					<Text style={{textAlign:"center",marginTop:250,backgroundColor:"#D9D9D9",borderRadius:20}}>
						Empty
					</Text>
                    
            
       
            
           
                    <StatusBar/>
                    
                    
        
        </View>
        


    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
   
})
export default CartScreen;
import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet ,ScrollView,ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';



const SettingScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  
  const addImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });      
    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }

  }
  
  
  return (
    
    
    <View >
        <Image
            style={{ opacity: 0.4,position:'absolute' }}
            source={require("../../../assets/background.jpg")}
        />
        <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    showsVerticalScrollIndicator={false}

>
    
                {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
						<View
							style={{ paddingLeft: 20, marginTop: 30, position: 'absolute' }}
						>
							<Icon name="menu-sharp" size={30}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							style={{
								width: 50,
								height: 50,
								borderRadius: 200,
								marginLeft: 325,
								marginTop: 30,
								position: 'absolute'
							}}
							source={require('../../../assets/Images/profile.jpg')}
						/>
					</TouchableOpacity> */}
                   
                    
            <View style={imageUploaderStyles.container}>
                
                    
                {
                    image  && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn}  >
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={20} color="black" />
                            
                        </TouchableOpacity>

                    </View>
                    
            </View>
            <View style={{marginTop:80,paddingLeft:30, backgroundColor:"#D9D9D9",borderRadius:50}}>
                
            <Text style={{marginTop:10}}> First Name
                
            </Text>
            <Text style={{position:"absolute",marginLeft:300,marginTop:10}}>
                    Muhammad
                </Text>
            <TouchableOpacity style={{marginLeft:320}}>
            <Text style={{color:"blue"}}> Edit</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingLeft:30, backgroundColor:"#D9D9D9",borderRadius:50}}>
                
            <Text style={{marginTop:10}}>Last Name
                
            </Text>
            <Text style={{position:"absolute",marginLeft:300,marginTop:10}}>
                     Younis
                </Text>
            <TouchableOpacity style={{marginLeft:320}}>
            <Text style={{color:"blue"}}> Edit</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingLeft:30,backgroundColor:"#D9D9D9",borderRadius:50}}>
                
            <Text style={{marginTop:10}}>Email
                
            </Text>
            <Text style={{position:"absolute",marginLeft:220,height: 50,width: 150,marginTop:10}}>
                    younis123@gmail.com
                </Text>
            <TouchableOpacity style={{marginLeft:320}}>
            <Text style={{color:"blue"}}> Edit</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingLeft:30,backgroundColor:"#D9D9D9",borderRadius:50}}>
                
            <Text style={{marginTop:10}}>Change Password
                
            </Text>
            <Text style={{position:"absolute",marginLeft:220,height: 50,width: 150,marginTop:10}}>
                    
                </Text>
            <TouchableOpacity style={{marginLeft:320}}>
            <Text style={{color:"blue"}}> Edit</Text>
            </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingLeft:30,backgroundColor:"#D9D9D9",borderRadius:50,height: 45,}}>
                <TouchableOpacity>
            <Text style={{marginTop:10,textAlign:"center",fontWeight:"bold",fontSize:15 }}>Track My Order
               
            </Text> 
            </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingLeft:30,backgroundColor:"#D9D9D9",borderRadius:50,height: 45,opacity:1}}>
                <TouchableOpacity>
            <Text style={{marginTop:10,textAlign:"center" ,fontWeight:"bold",fontSize:18}}>Log Out
               
            </Text> 
            </TouchableOpacity>
            </View>
            
            </ScrollView>
            
            </View>
            
  );
}
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:200,
        width:200,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:999,
        overflow:'hidden',
        marginTop:100,
        alignSelf:"center"
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'25%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})
export default SettingScreen;
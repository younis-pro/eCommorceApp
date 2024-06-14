
import React, { useCallback, useEffect, useState } from 'react';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Image, StyleSheet,TextInput, SafeAreaView,TouchableOpacity, StatusBar,Modal,Alert,ToastAndroid} from "react-native";
import { ImageSlider } from "react-native-image-slider-banner";
import Cosmatics from '../../Component/Cosmatics';




const ProductScreen =({navigation,route})=>{
	const [iconchange,setIconchange] = useState('black');
    const [active1,setActive1] =useState(false);
    const [active2,setActive2] =useState(false);
    const [active3,setActive3] =useState(false);
  const HandlePress1 =()=>{
   
    setActive1(!active1);
  }
  const HandlePress2 =()=>{
   
    setActive2(!active2);
  }
  const HandlePress3 =()=>{
   
    setActive3(!active3);
  }
  const [count, setCount] = useState(1);

const incrementCount=useCallback(()=>{
    setCount(count + 1);
},[count])

const decrementCount=useCallback(()=>{
    setCount(count - 1);
},[count])

const [modalVisible, setModalVisible] = useState(false);
const ShowToast =()=>{
    ToastAndroid.show('Add To Cart successfully!', ToastAndroid.SHORT);
}
    return(
        <View style={styles.container}>
            
              
					<Text
						style={{
							marginTop: 20,
							fontSize: 20,
							marginLeft: 20,
							fontWeight: 'bold'}}>
					Products
					</Text>
                    <TouchableOpacity style={{position:"absolute",marginTop:20,marginLeft:370}}>
                          <Icon name="cart" size={20} ></Icon>
                        </TouchableOpacity>
                    <View >
                   
                        <Image style={{width: 400,height: 400,marginTop:40,alignSelf:"center",borderRadius:20,position:"absolute"}} 
                        source={route.params.image}/>
                         </View>
                        
                       
                        
                        <Text style={{marginTop:440,color:'white',position: 'absolute',marginLeft:20}}>1/1</Text>
                   
                   <View>
                   <TouchableOpacity style={{marginTop:400,marginLeft:370,}} onPress={()=>setIconchange('red')}>
                            
                            <Icon name='heart' size={30} color={iconchange}  
                            
                            />
                            
                            </TouchableOpacity>
                   </View>
                    <View>
                        <Text style={{fontSize:24,marginTop:20,marginLeft:10}}>Color</Text>
                        <Text style={{fontSize:20,marginTop:20,marginStart:350,position: 'absolute'}}>N/A</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:24,marginTop:20,marginLeft:10}}>Size</Text>
                        <TouchableOpacity style={{...styles.sizeBox,marginLeft:250,backgroundColor: active1 ? "blue" : "white"}} onPress={HandlePress1}>
                            <Text  style={styles.boxText}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.sizeBox,marginLeft:300,backgroundColor: active2 ? "blue" : "white"}} onPress={HandlePress2}>
                            <Text style={{...styles.boxText}}>M</Text>
                        </TouchableOpacity > 
                        <TouchableOpacity style={{...styles.sizeBox,marginLeft:350,backgroundColor: active3 ? "blue" : "white"}} onPress={HandlePress3}>
                            <Text  style={{...styles.boxText}}>L</Text>
                        </TouchableOpacity>
                        <Text style={{fontSize:20,marginTop:70,marginStart:10,position: 'absolute'}}>Quantity</Text>
                        <View>
                        <TouchableOpacity style={{...styles.sizeBox,marginLeft:300,marginTop:20}} >
                            <Text  style={styles.boxText} >{count}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.sizeBox,marginLeft:350,marginTop:20}} onPress={incrementCount}>
                            <Text style={styles.boxText}>+</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.sizeBox,marginLeft:250,marginTop:20}} onPress={decrementCount}>
                            <Text style={styles.boxText}>-</Text>

                        </TouchableOpacity>
                        </View>
                        <View>
                        <Text style={{fontSize:20,marginTop:60,marginStart:10,position: 'absolute'}}>Voucher</Text>
                        <TextInput style={{fontSize:20,marginTop:60,marginStart:250,position: 'absolute',borderColor:"grey",borderWidth:2,width: 140,borderRadius:10,}}></TextInput>
                        </View>
                        <Text style={{fontSize:20,marginTop:150,marginStart:10,position: 'absolute'}}>Price</Text>

                        <Text style={{fontSize:20,marginTop:150,marginStart:300,position: 'absolute'}}>{route.params.price}</Text>
                        <View>
                            <TouchableOpacity style={styles.btnStyle} onPress={() => setModalVisible(true)}>
                                <Text style={{textAlign:"center",fontSize:20,marginTop:5}}>Purchase</Text>
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.btnStyle,marginTop:20,backgroundColor:"#FFFFFF"}}  onPress={ShowToast} >
                                <Text style={{textAlign:"center",fontSize:20,marginTop:5,}}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                        <View >
       
                 <Modal
                 animationType="slide"
                 transparent={true}
                 visible={modalVisible}
                 onRequestClose={() => {
                   Alert.alert("Modal has been closed.");
                   setModalVisible(!modalVisible);
                 }}
               >
                 
                   <View style={styles.modalView}>
                    
                     <TouchableOpacity
                       style={ styles.buttonClose}
                       onPress={() => setModalVisible(!modalVisible)}
                     >
                         <Icon name='close' color={'white'} size={25} ></Icon>
                       
                     </TouchableOpacity>
                     <View>
                        <Text style={{textAlign:"center",fontSize:20,marginTop:50,position:'absolute',marginLeft:20}}>Total Price</Text>
                        <Text style={{textAlign:"center",fontSize:20,marginTop:50,marginLeft:300}}>{route.params.price}</Text>
                     </View>
                     <View style={{width:'90%', height: 180,backgroundColor:'red', alignSelf:'center', marginTop:30,borderRadius:20,}}>
                        
                        <Text style={{color:'white',alignSelf:'center',fontSize:20,marginTop:10}}> Account Detail </Text>
                        <Text style={{color:'white',alignSelf:'center',fontSize:30,marginTop:30}}> XXXX-XXXXXXXXX-XXXX </Text>
                        <Text style={{color:'white',alignSelf:'center',fontSize:20,marginTop:40,marginLeft:200}}> Muhammad Younis </Text>

                     </View>
                     <TouchableOpacity style={{...styles.btnStyle,marginTop:50,backgroundColor:"red",height: 45,width: '100%',}} onPress={() => {alert("Your Order is Confirmed")}}>
                                <Text style={{textAlign:"center",fontSize:30,marginTop:5,fontWeight:'bold',color:'white'}}>Confirm</Text>
                            </TouchableOpacity>
                   </View>
                 
               </Modal>
               </View>
                    </View>
                    <StatusBar/>
        </View>
        


    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    sizeBox:{
        
        marginTop:30, 
        position: 'absolute',
        marginBottom:10,
         borderColor:"blue",
        borderWidth:2,
        width: 40,
        borderRadius:8
    },
    boxText:{
        fontSize:20,
        alignSelf:"center"
    },
    btnStyle:{
        marginTop:150,
        backgroundColor:"#D9D9D9",
        width: 350,
        height: 40,
        alignSelf:'center',
        borderRadius:20
        
    },
    modalView:{
        
        backgroundColor: "white",
        borderRadius: 20,
        marginTop:'100%',
        width: "100%",
        height: 450,
    },
    buttonClose:{
        position:"absolute",
        marginLeft:370,
        marginTop:10,
        backgroundColor:"red",
        borderRadius:20
    }
   
})
export default ProductScreen;
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {ViewPropTypes} from 'deprecated-react-native-prop-types'
import Data from '../../Component/StoreData';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	StatusBar,
	ScrollView,
	FlatList,
	Modal,
	Alert
} from 'react-native';
import Cosmatics from '../../Component/Cosmatics';
import Bags from '../../Component/bags';
import Headphones from '../../Component/headphones';
import ProfileScreen from '../ProfileScreen/Profile';

const HomeScreen = ({ navigation }) => {
	// componentDidMount = async () => {
	//     await Font.loadAsync({
	//       'neohellenic-regular': require('../../assets/fonts/GFSNeohellenic-Regular.ttf'),
	//     });
	//     this.setState({ loading: false })
	//   }
	const renderItem = ({ item }) => {
		return (
			<View style={{ flexDirection: 'row', alignSelf: 'center', height: 400 }}>
				
				<TouchableOpacity  onPress={() => {navigation.navigate('ProductScreen',item)}}
				 >
					<Image
						style={{
							width: 200,
							height: 320,
							marginVertical: 70,
							alignSelf: 'center',
							borderRadius: 10,
							marginEnd: 20
						}}
						source={item.image}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						position: 'absolute',
						marginTop: 300,
						height: 30,
						marginLeft: 30,
						backgroundColor: '#CCDDCC',
						width: 150,
						borderRadius: 20,
						opacity: 0.7
					}}
				>
					<Text 
						style={{
							textAlign: 'center',
							marginTop: 5,
							fontWeight: 'bold',
							fontSize: 17
						}}
					>
						{item.price}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						marginTop: 350,
						height: 30,
						position: 'absolute',
						marginLeft: 29,
						backgroundColor: '#D9D9D9',
						width: 150,
						borderRadius: 20,
						opacity: 0.7
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							marginTop: 5,
							fontWeight: 'bold',
							fontSize: 17
						}}
					>
						Details
					</Text>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					showsVerticalScrollIndicator={false}
				>
					<TouchableOpacity onPress={() => navigation.openDrawer()}>
						<View
							style={{ paddingLeft: 20, marginTop: 30, position: 'absolute' }}
						>
							<Icon name="menu-sharp" size={30}/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={ ()=> navigation.navigate('SettingScreen')} >

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
					<Text
						style={{
							marginTop: 120,
							fontSize: 20,
							marginLeft: 20,
							fontWeight: 'bold'
						}}
					>
						Products
					</Text>
					<Text
						style={{
							marginTop: 180,
							fontSize: 20,
							alignSelf: 'center',
							position: 'absolute'
						}}
					>
						Garments
					</Text>
					<View>
					
						<FlatList 
						
							data={Data}
							renderItem={renderItem}
							keyExtractor={item => item.id + ''}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<View>
						<Text
							style={{
								marginTop: 40,
								fontSize: 20,
								alignSelf: 'center',
								position: 'absolute'
							}}
						>
							Cosmatics
						</Text>
						<FlatList
							data={Cosmatics}
							renderItem={renderItem}
							keyExtractor={item => item.id + ''}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<View>
						<Text
							style={{
								marginTop: 40,
								fontSize: 20,
								alignSelf: 'center',
								position: 'absolute'
							}}
						>
							Bags
						</Text>
						<FlatList
							data={Bags}
							renderItem={renderItem}
							keyExtractor={item => item.id + ''}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
					<View>
						<Text
							style={{
								marginTop: 40,
								fontSize: 20,
								alignSelf: 'center',
								position: 'absolute'
							}}
						>
							HeadPhones
						</Text>
						<FlatList
							data={Headphones}
							renderItem={renderItem}
							keyExtractor={item => item.id + ''}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
			<StatusBar />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	centeredView: {
		flex:1,
		alignSelf:"center",
		marginTop: 200,
		
		

	  },
	  modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		width: 400,
		height: 600, 
		alignItems: "center",
		shadowColor: "black",
		shadowOffset: {
		  width: 100,
		  height: 100
		},
		shadowOpacity: 10,
		shadowRadius: 100,
		elevation:100
	  },
	  button: {
		borderRadius: 20,
		padding: 5,
		
		
		position: "absolute",
		
		
	  },
	  buttonOpen: {
		backgroundColor: "#F194FF",
	  },
	  buttonClose: {
		backgroundColor: "#2196F3",
	  },
	  textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	  },
	  modalText: {
		marginBottom: 15,
		textAlign: "center"
	  }
});
export default HomeScreen;

import React, { useState } from 'react';

import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	StatusBar
} from 'react-native';

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={styles.img}>
					<Image
						style={{ width: 420, height: 900, opacity: 0.7 }}
						source={require("../../../assets/Images/Splash2.jpg")}
					/>
				</View>
				<View
					style={{ position: 'absolute', marginTop: 70, alignSelf: 'center' }}
				>
					<Image
						style={{ widht: 100, height: 100 }}
						source={require('../../../assets/Images/logo.png')}
					/>
				</View>
				<View style={styles.emailInput}>
					<TextInput
						style={{
							alignSelf: 'center',
							width: 350,
							position: 'absolute',
							borderBottomWidth: 2,
							borderBottomColor: 'white',
							fontSize: 20,
							color: 'white'
						}}
						placeholder="Email"
						placeholderTextColor={'white'}
						onChangeText={email => setEmail(email)}
						defaultValue={email}
					/>

					<TextInput
						style={{
							alignSelf: 'center',
							width: 350,
							position: 'absolute',
							borderBottomWidth: 2,
							borderBottomColor: 'white',
							fontSize: 20,
							marginTop: 110,
							color: 'white'
						}}
						placeholder="Password"
						placeholderTextColor={'white'}
						onChangeText={password => setPassword(password)}
						defaultValue={password}
						secureTextEntry={true}
					/>
					<TouchableOpacity
						style={{
							marginTop: 180,
							alignSelf: 'center'
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							Forgot Password
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							marginTop: 40,
							backgroundColor: 'white',
							width: 350,
							height: 45,
							borderRadius: 20,
							alignSelf: 'center'
						}}
						onPress={() => {
							navigation.navigate("DrawerScreen");
						}}
					>
						<Text
							style={{
								textAlign: 'center',
								marginTop: 8,
								fontSize: 20,
								color: 'black',
								fontWeight: 'bold'
							}}
						>
							LogIn
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							marginTop: 40,
							backgroundColor: 'white',
							width: 350,
							height: 45,
							borderRadius: 20,
							alignSelf: 'center'
						}}
					 onPress={()=> navigation.navigate('RegisterScreen')}>
						<Text
							style={{
								textAlign: 'center',
								marginTop: 8,
								fontSize: 20,
								color: 'black',
								fontWeight: 'bold'
							}}
						>
							Register
						</Text>
					</TouchableOpacity>
				</View>
				<StatusBar />
			</SafeAreaView>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	img: {
		alignSelf: 'center',
		position: 'absolute'
	},
	emailInput: {
		marginTop: 320
	}
});
export default LoginScreen;

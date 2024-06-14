import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen/LogIn';
import RegisterScreen from '../Screens/RegisterScreen/Register';
import SplashScreen from '../Screens/SplashScreen/Splash';
import CartScreen from '../Screens/CartScreen/CartScreen';
import HomeScreen from '../Screens/HomeScreen/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import SettingScreen from '../Screens/SettingScreen/Settings';
import CustomDrawer from './customDrawer';
import ShareScreen from '../Screens/ShareApp/ShareScreen';
import InfoScreen from '../Screens/InfoScreen/InfoScreen';
import ContactScreen from '../Screens/Contactus/ContactScreen';
import ProductScreen from '../Screens/Products/Product';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerScreen =()=>{
	return(	
		<Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false , drawerActiveBackgroundColor:'red' ,drawerActiveTintColor:'white' }} 
		drawerContent={props => <CustomDrawer {...props}/> }>
        <Drawer.Screen name="Home" component={HomeScreen}  />
		<Drawer.Screen name="My Account" component={SettingScreen}   />
		<Drawer.Screen name="Cart" component={CartScreen} />
		<Drawer.Screen name="Share App" component={ShareScreen} />
		<Drawer.Screen name="Info" component={InfoScreen} />
		<Drawer.Screen name="Contact Us" component={ContactScreen} />
		</Drawer.Navigator>
	);
} 
function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="DrawerScreen" component={DrawerScreen} />
				<Stack.Screen name="RegisterScreen" component={RegisterScreen} />
				<Stack.Screen name="SettingScreen" component={SettingScreen} />	
				<Stack.Screen name="ProductScreen" component={ProductScreen} />
			
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default Navigation;

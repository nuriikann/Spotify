import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";

const styles = StyleSheet.create ({
    navlogo: {
        width: 24,
        height: 24
    },
    navBarBg: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        bottom:0,
        left:0,
        right:0,
        shadowOpacity:4,
        elevation:4,
        shadowRadius:4,
        width:0,
        shadowOffset:{
            height:-4
        },
        borderTopWidth:0 
    }
})

const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={styles.navBarBg}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ tabBarLabel: "Home", 
                    headerShown: false, 
                    tabBarStyle: { color: "white" },
                    tabBarIcon:({focused}) =>
                    focused ?(
                        <Image style={styles.navlogo} source={require('./assets/icons/home-dark.png')}/>
                    ) : (
                        <Image style={styles.navlogo} source={require('./assets/icons/home-light.png')}/>
            ) }} />

                <Tab.Screen name="Profile" 
                component={Profile} 
                options={{tabBarLabel: "Profile",
                headerShown: false,
                tabBarStyle: {color: "white"},
                tabBarIcon:({focused}) =>
                focused ?(
                    <Image style={styles.navlogo} source={require('./assets/icons/user-dark.png')}/>
                ) : (
                    <Image style={styles.navlogo} source={require('./assets/icons/user-light.png')}/>
                )
            }} />
        </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Profile from "./screens/Profile";
import { Ionicons } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: "Home", 
                    headerShown: false, 
                    tabBarStyle: { color: "white" },
                    tabBarIcon:({focused}) =>
                    focused ?(
                        <Entypo name="home" size={24} color="black" />
                    ) : (
                        <AntDesign name="home" size={24} color="black" />
            ) }} />

                <Tab.Screen name="Profile" 
                component={Profile} 
                options={{tabBarLabel: "Profile",
                headerShown: false,
                tabBarStyle: {color: "white"},
                tabBarIcon:({focused}) =>
                focused ?(
                    <Ionicons name="ios-person" size={24} color="black" />
                ) : (
                    <Ionicons name="ios-person-outline" size={24} color="black" />
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
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


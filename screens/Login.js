import { StyleSheet, Text, View, SafeAreaView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import * as AppAuth from 'expo-app-auth'


const Login = () => {

    async function authenticate(){
        const config ={
            issuer: 'https://accounts.spotify.com',
            clientId: '488dff28d86b4c8a86d452aed8ae9a76',
            scopes: [
                "user-read-email",
                "user-library-read",
                "user-read-recently-played",
                "user-top-read",
                "playlist-read-private",
                "playlist-read-collaborative",
                "playlist-modify-public"
              ],
              redirectUrl:"exp://192.168.8.197:8081/--/spotify-auth-callback"
        }

        const results = await AppAuth.authAsync(config)
    }
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex:1}}>
        <SafeAreaView>
            <View style={{height:80}}/>
            <Image style={styles.logo} source={require('../assets/spotify-logo.png')}></Image>
            <Text style={styles.logoText}>Millions of Songs Free on spotify!</Text>
            <View style= {{marginTop: 50}}>
                <TouchableOpacity onPress={authenticate} style={styles.spotifyBtn}>
                    <Text style={{fontSize: 15}}>Sign in with Spotify</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logInBtn}>
                    <Image style={{height: 24, width: 24}} source={require ('../assets/icons/iphone.png')}/>
                    <Text style={{fontWeight:"500",color:"white",textAlign:"center",flex:1}}>Continue with phone number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logInBtn}>
                <Image style={{height: 24, width: 24}} source={require ('../assets/icons/google.png')}/>
                    <Text style={{fontWeight:"500",color:"white",textAlign:"center",flex:1}}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logInBtn}>
                <Image style={{height: 24, width: 24}} source={require ('../assets/icons/facebook.png')}/>
                    <Text style={{fontWeight:"500",color:"white",textAlign:"center",flex:1}}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </LinearGradient>   
    
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111111'
    },
    logo: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 80,
        height: 80
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 40,
        fontSize: 40,
        fontWeight: 'bold'
    },
    spotifyBtn: {
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginVertical:10,
    },
    logInBtn: {
        backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection:"row",
            alignItems:"center",
            marginVertical:10,
            borderColor:"#C0C0C0",
            borderWidth:0.8
    }
})
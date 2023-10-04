import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
  return (
    <LinearGradient colors={['#040306', '#131624']} style={{flex:1}}>
        <SafeAreaView>
            <Text style={{color: 'white'}}>Login</Text>
        </SafeAreaView>
    </LinearGradient>   
    
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111111'
    }
})
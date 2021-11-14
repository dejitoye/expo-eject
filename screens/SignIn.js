import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
const SignIn = ({navigation}) => {
    console.log(navigation)
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' ,flex:1}]}>
             <StatusBar barStyle="dark-content" backgroundColor="#6a5"  />
            <Text> Sign In </Text>

            <TouchableOpacity style={styles.btn} onPress = {()=>{navigation.navigate("Home")}}> 
                <Text> back to Home</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

export default SignIn

// const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
const SignOut = ({navigation}) => {
    return (
        <View style={styles.body}>
            <TouchableOpacity onPress = {()=>{navigation.navigate("SignIn")}}>
            <Text> Sign Out </Text> 
            </TouchableOpacity>
          
        </View>
    )
}

export default SignOut

// const styles = StyleSheet.create({})

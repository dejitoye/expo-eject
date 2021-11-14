import React from 'react'
import styles from "./styles"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const ScreenB = ({navigation}) => {
    return (
        <View  style={styles.body}>
            <Text> Screen B   </Text>

            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Help")}}> 
                <Text> back to ..... HelpPage</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("chat")}}> 
                <Text> back to Chat </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenB

// const styles = StyleSheet.create({})
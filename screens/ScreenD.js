import React from 'react'
import styles from "./styles"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const ScreenD = ({navigation}) => {
    return (
        <View style={styles.body}>
            <Text> Screen D  </Text>

            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("Home")}}> 
                <Text> back to ..... Home </Text>
            </TouchableOpacity>
        </View>
    )
}
 
export default ScreenD

// const styles = StyleSheet.create({})
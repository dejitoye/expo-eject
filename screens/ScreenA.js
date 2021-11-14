import React from 'react'
import styles from "./styles"
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from './CustomHeader'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const ScreenA = ({navigation}) => {
    const aa =   <AntDesign name="forward" size={24} color="black" />
    return (

        <SafeAreaView style={{flex:1}} edges={["top"]}>
        <StatusBar barStyle="dark-content"  />
        <CustomHeader title="screen A" aa ={aa}/>
        <View style={styles.body}>
            <Text> 
                Screen A
                 </Text>

            <TouchableOpacity style={styles.btn}   onPress={()=>{navigation.navigate("Profile")}}> 
                <Text> back to ..... Profile</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default ScreenA

// const styles = StyleSheet.create({})
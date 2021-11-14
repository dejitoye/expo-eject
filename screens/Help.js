import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Help = ({navigation}) => {
    return (
        <View>
            <Text> Help Me </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                <Text> to Profile page</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Help

// const styles = StyleSheet.create({})

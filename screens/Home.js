import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import CustomHeader from './CustomHeader'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import { 
    AguafinaScript_400Regular 
  } from '@expo-google-fonts/aguafina-script'
import { useFonts } from '@expo-google-fonts/aguafina-script'
// import { useFonts } from 'expo-font'
const Home = ({navigation}) => {
const insert = useSafeAreaInsets()
const aa =  <Ionicons name="md-checkmark-circle" size={32} color="green" />

    return (
        <SafeAreaView style={{flex:1}} edges={["top"]}>
            <StatusBar barStyle="dark-content"  />
            <CustomHeader title = "Home" aa={aa}/>
            <View style={styles.body}>
            <Text style={{fontFamily:"aguafina-script"}}> Home Screen </Text>

            <TouchableOpacity onPress = {()=>{navigation.navigate("screenB")}}> 
                <Text>  back to ..... screen B</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = {()=>{navigation.navigate("SignOut")}}> 
                <Text>  back to ..... signout</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Home

// const styles = StyleSheet.create({})

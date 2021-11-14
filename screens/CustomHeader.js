import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const CustomHeader = ({title,aa}) => {
    return (
        <View style={styles.custom}>
           <View style={styles.custom1}></View>
           <View style={[styles.custom1],{flex:2}}>
               <Text style={{alignSelf:"center"}}> {title}</Text>
           </View>
           <View style={styles.custom1}>
           {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
<View> 
{aa}
</View>
           </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
custom:{
    flexDirection:"row",
    height:50,
  
   
},
custom1:{
    flex:1,
  alignItems:"center",
  
   
    justifyContent:"center"
},
})

import styles from "./styles"
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ScreenC = () => {
    return (
        <View style={styles.body}>
            <Text> Screen C   </Text>

            <TouchableOpacity style={styles.btn}> 
                <Text> back to .....</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenC


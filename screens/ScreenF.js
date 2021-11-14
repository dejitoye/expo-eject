import styles from "./styles"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

const ScreenF = () => {
    return (
        <View style={styles.body}>
            <Text> Screen F   </Text>

            <TouchableOpacity style={styles.btn}> 
                <Text> back to .....</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenF

// const styles = StyleSheet.create({})
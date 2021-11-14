import styles from "./styles"
import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const ScreenE = () => {
    return (
        <View style={styles.body}>
            <Text> Screen E   </Text>

            <TouchableOpacity style={styles.btn}> 
                <Text> back to .....</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ScreenE

// const styles = StyleSheet.create({})
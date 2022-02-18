import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = ({ type, content, onPress }) => { 

    const backgroundColor = type === 'primary' ? '#222222' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFF' : '#000000'
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
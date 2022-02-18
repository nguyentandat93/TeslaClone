import React from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import CarList from './components/CarList'
import Header from './components/Header'

const App = () => {
    return (
        <View style={styles.container}>
            <Header />
            <CarList />
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    } 
})

export default App
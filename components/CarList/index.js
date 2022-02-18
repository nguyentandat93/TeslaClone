import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'

const CarList = () => {
    return (
        <View style={styles.carListContainer}>
            <FlatList 
                keyExtractor={(item) => item.name}
                data={cars}
                renderItem={({ item }) => (
                    <CarItem 
                        name={item.name}
                        tagLine={item.tagline}
                        tagLineCTA={item.taglineCTA}
                        image={item.image}
                    />
                )}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default CarList
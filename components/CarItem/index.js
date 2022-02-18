import React from 'react' 
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = ({ name, tagLine, tagLineCTA, image}) => {
    return (
        <View style={styles.carContainer}>
           
            <ImageBackground 
                source={image}
                style={styles.image}
            />
            
            <View style={styles.titles}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <Text style={styles.subTitle}>
                    {tagLine}
                    {' '}
                    <Text style={styles.subTitleCTA}>
                        {tagLineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => console.warn('Custom was Pressed')}
                />

                <StyledButton 
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => console.warn('Inventory was Pressed')}
                />
            </View>

            

        </View>
    )
}

export default CarItem
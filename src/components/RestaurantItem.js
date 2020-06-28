import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import styles from '../styles'


const RestaurantItem =props=>{
    return(
        <TouchableOpacity style={styles.components.RestauranItem.container}
            onPress={props.onPress}
        >
            <Text style={styles.components.RestauranItem.cityText}>{props.Restaurant.name}</Text>
        </TouchableOpacity>
    )
}
export {RestaurantItem}
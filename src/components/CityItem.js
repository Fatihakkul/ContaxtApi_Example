import React from 'react'
import {TouchableOpacity,Text} from 'react-native'
import styles from '../styles'

const CityItem =props=>{
    return(
        <TouchableOpacity style={styles.components.cityItem.container} onPress={props.onPress}>
            <Text style={styles.components.cityItem.cityText}>{props.cityName}</Text>
        </TouchableOpacity>
    )
}
export {CityItem}
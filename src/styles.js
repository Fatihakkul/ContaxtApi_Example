import {StyleSheet,Dimensions} from 'react-native'

const deviceSize= Dimensions.get("window").width

const styles={
    components : {
        cityItem : StyleSheet.create({
            container : {
                margin: 5,
                padding : 5,
                justifyContent : 'center',
                alignItems : 'center'
            },
            cityText : {
                fontSize : 20,
               
            }
        }),
        RestauranItem : StyleSheet.create({
            container : {
                margin : 5,
                padding : 5,
                justifyContent : 'center',
                alignItems : 'center'
            },
            cityText : {
                fontSize : 20,
               
            }
        })
    },
    pages : {
        cityList : StyleSheet.create({
            selectCityText : {
                fontWeight: 'bold',
                fontSize : 20
            }
        }),
        restaurantsList : StyleSheet.create({
                cityContainer : {
                    margin : 10,
                    padding: 10,
                    borderWidth : 1,
                    borderColor : 'gray',
                    alignItems : 'center',
                    borderRadius : 15
                },
                cityText : {
                    fontSize : 25,
                    fontWeight : 'bold'
                }
        })
    }
}

export default styles
import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import {SafeAreaView,Text,View,FlatList} from 'react-native'
import {RestaurantItem} from '../components'
import Context from '../context/store'
import styles from '../styles'


const RestaurantList =props=>{
   const {state,dispatch} = useContext(Context)
  
   useEffect(()=>{fetchData()},[])

   const fetchData = async ()=>{
        let response = await axios.get("https://opentable.herokuapp.com/api/restaurants?city=" + state.selectedCity)
            console.log(response.data)
            dispatch({type : "SET_RESTAURANTS" , resList : response.data.restaurants})
    }
 
    const renderRestaurants =({item})=> <RestaurantItem  Restaurant={item}/>
    return(
        <SafeAreaView>
            <View>
                <View style={styles.pages.restaurantsList.cityContainer}>
                    <Text style={styles.pages.restaurantsList.cityText}>{state.selectedCity} Restoranları</Text>
                </View>
               <FlatList
                    keyExtractor={(item,index)=>index.toString()}
                    data={state.restaurantsList}
                    renderItem={renderRestaurants}

               />
            </View>
        </SafeAreaView>
    )
}
export {RestaurantList}
import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import {SafeAreaView,View,Text,FlatList} from 'react-native'
import {CityItem} from '../components'
import styles from '../styles'
import Context from '../context/store'



const CityList=props=>{

    const [Cities,setCities]=useState([])
    const {state,dispatch} =useContext(Context)

    useEffect(() => {fetchData()} , [])
    

    const fetchData = async()=>{
            let {data}=await axios.get('https://opentable.herokuapp.com/api/cities')
            console.log(data)
            setCities(data.cities)
    }

    function selectCity (city){
        dispatch({type : "SET_SELECTED_CITY" , city : city})
        props.navigation.navigate("Main")
    }

    const renderedCities =({item})=> <CityItem  cityName={item} onPress={()=>selectCity(item)} />
        
    
    return(
        <SafeAreaView style={{flex : 1}}>
            <View style={{flex : 1}}>
                <Text style={styles.pages.cityList.selectCityText}> Bir Şehir Seç</Text>
                <FlatList 
                    keyExtractor={(item,index)=> index.toString()}
                    data={Cities}
                    renderItem={renderedCities}
                />
            </View>
        </SafeAreaView>
    )
}
export {CityList}
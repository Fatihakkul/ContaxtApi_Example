import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {CityList,RestaurantDetail,RestaurantList,RestaurantMap} from './pages'
import Provider from './context/Provider'

const Stack=createStackNavigator();
const Tab = createBottomTabNavigator();

function Main (){
    return(
        <Tab.Navigator initialRouteName="List">
        <Tab.Screen name="Map" component={RestaurantMap}/>
        <Tab.Screen name="List" component={RestaurantList}/>
        </Tab.Navigator>
    )
}

function Rotuer (){
    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="CityList">
                    <Stack.Screen name="CityList" component={CityList} options={{headerShown : false}}/>
                <Stack.Screen name="Main" component={Main} options={{headerShown : false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}
export default Rotuer
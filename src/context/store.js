import {createContext} from 'react'

export const initialState={
    selectedCity : "",
    restaurantsList : []
}

export default Context = createContext(initialState)
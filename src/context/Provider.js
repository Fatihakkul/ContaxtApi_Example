import React,{ useReducer } from 'react'

import Contex, {initialState} from './store'
import {reducer} from './reducer'

const Provider =props=>{
    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <Contex.Provider value={{state,dispatch}}>
                {props.children}
        </Contex.Provider>
    )
}
export default Provider
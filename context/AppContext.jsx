"use client"

import { createContext, useContext, useReducer } from "react"
import { AppReducer } from "./AppReducer"


const AppContext = createContext()

const initialState = {
    activeMenu : false
}



export const AppContextProvider = ({children}) => {

const [state , dispatch] = useReducer(initialState , AppReducer)

function OpenMenu(){
    dispatch({type : "OPENMENU" , payload : true})
}
function CloseMenu(){
    dispatch({type : "CLOSEMENU" , payload : false})
}

    return (
        <AppContext.Provider value={{...state , OpenMenu , CloseMenu}}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = ()=>useContext(AppContext)
"use client"

import { createContext, useContext, useReducer } from "react"
import { appReducer } from "./AppReducer"


const AppContext = createContext();

const initialState = {
  activeMenu: false,
  isdarkMode: false ,
};



export const AppContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

function ShowMenu(menu){
    dispatch({ type : "SHOWMENU" , payload : menu})
}

    return (
        <AppContext.Provider value={{...state , ShowMenu}}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = ()=>useContext(AppContext)
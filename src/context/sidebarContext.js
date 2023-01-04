import React,{useState} from "react";
import { createContext } from "react";

export const sideBarContext = createContext();

const SideBarProvider=({children})=>{
    const[sidebar,setSidebar]=useState(false)
    return(
        <sideBarContext.Provider value={{sidebar,setSidebar}}>
            {children}
        </sideBarContext.Provider>
    )
}

export default SideBarProvider;
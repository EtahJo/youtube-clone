import React, {useState,createContext} from "react";
import VideoData from "../data/videoData";
export const dataContext=createContext(null);

const DataContextProvider=({children})=>{
    const[data,setData]=useState(VideoData)
    return(
        <dataContext.Provider value={{data,setData}}>
            {children}
        </dataContext.Provider>
    )
}


export default DataContextProvider

import React, { createContext,useState } from "react";

export const themeContext = createContext(null);

const ThemeProvider =({children})=>{
    const [dark,setDark]= useState(true);
    return(
        <themeContext value={{dark,setDark}}>
            {children}
        </themeContext>
    )
}

export default ThemeProvider
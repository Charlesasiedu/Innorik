import React, {createContext, useState } from "react"


// create context 
export const ThemeContext= createContext();

// create Provider 
export const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState('light');

    const toggleTheme = () =>{
        setTheme ((prevTheme)=>(
            prevTheme === 'light'? 'dark' : 'light'
        ))
    }
return (
  <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
    {children}
  </ThemeContext.Provider>
    
  )
};
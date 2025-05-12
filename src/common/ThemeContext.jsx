import React,{createContext,useContext,useEffect,useState} from 'react'
import { Children } from 'react';

const ThemeContext = createContext();

export const useTheme = () =>useContext(ThemeContext);

export const ThemeProvider = ({Children}) =>{
  const[theme,setTheme] = useState(
    () =>localStorage.getItem('theme') || 'light'
  );
  useEffect(() =>{
    document.body.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
  },[theme]);
  
  toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme ==='light'?'dark':'light'));
  };
  return(
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {Children}
    </ThemeContext.Provider>
  )
};


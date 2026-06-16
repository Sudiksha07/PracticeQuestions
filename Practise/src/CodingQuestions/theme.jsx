import { useState } from "react";
import '../App.css'

const Theme = ()=>{
    const [theme,setTheme]= useState('dark');
    const handleChangeTheme =()=>{
        setTheme(
            prev => prev ==='dark'? 'light':'dark'
        )
    }
    return(
        <>
       <div className={theme}>
       </div>
       <button onClick = {handleChangeTheme}> <h1>{theme}</h1></button>
       </>
    )
}
export default Theme;
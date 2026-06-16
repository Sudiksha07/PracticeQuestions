import { useContext } from "react";
import { UserContext } from "./UserContext";

const Home=()=>{
    const {name , setName} = useContext(UserContext)
    const handleOnClick = ()=>{
        setName(
          name === 'Sudiksha' ? 'Shiven': 'Sudiksha'
        )
    }
    return(
        <>
     <h1> {name}</h1>
     <button onClick = {handleOnClick}><h2>Change Name</h2></button>
     </>
    )

}
export default Home;
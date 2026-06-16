import Home from "./home"
import UserProvider from "./UserProvider"

const ExampleContext = () =>{
    return(
      <UserProvider>
        <Home/>
      </UserProvider>
    )
}

export default ExampleContext;
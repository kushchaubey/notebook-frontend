import { Outlet } from "react-router-dom"
import Container from "./container"
import Header from "./header"
import ToggleMode from "./toggleMode"

const Layout = ()=>{
    return(
        <>
            <Header/>
            <Container>
               <Outlet/>
            </Container>

             <ToggleMode buttonname="Toggle Mode"/>
        </>
    )
}

export default Layout
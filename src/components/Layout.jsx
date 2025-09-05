import { Outlet } from "react-router-dom"
import Container from "./container"
import Header from "./header"

const Layout = ()=>{
    return(
        <>
            <Header/>
            <Container>
               <Outlet/>
            </Container>
        </>
    )
}

export default Layout
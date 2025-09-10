import { Outlet } from "react-router-dom"
import Container from "./container"
import Header from "./header"
import ToggleMode from "./toggleMode"
import { ToastContainer } from "react-toastify"
const Layout = ()=>{
    return(
        <>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                
          />
            <Header/>
            <Container>
               <Outlet/>
            </Container>

             <ToggleMode buttonname="Toggle Mode"/>
        </>
    )
}

export default Layout
import { Link, Outlet } from "react-router-dom"



const Layout=()=>{
    return(
        <>
            <Link to="home">Home</Link>
           <hr/>
           <Outlet/>
        </>
    )
}

export default Layout
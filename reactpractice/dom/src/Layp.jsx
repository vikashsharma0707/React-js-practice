import { Link, Outlet } from "react-router-dom";


const Layp=()=>{
    return(
        <>
           <Link to="home">Home</Link>
           <Link to="about">About</Link>
           <Link to="display">Display</Link>
           <Link to="insert">Insert</Link>
           <Link to="subject">Subject</Link>

           <Outlet/>
        </>
    )
}

export default Layp;
import { Link, Outlet } from "react-router-dom";



const Layout=()=>{
    return(
        <>
          <Link to="home">Home</Link>
          <Link to="insert">Insert</Link>
          <Link to="Display">Display</Link>
          <Link to="Search">Search</Link>
          <Link to="update">Update</Link>

          <hr/>
          <Outlet/>
        
        </>
    )
}

export default Layout;
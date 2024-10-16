import { BrowserRouter, Routes , Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Update from "./pages/Update";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";


const  App=()=>{
  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>} />
                  <Route path="home" element={<Home/>}/>
                  <Route path="insert" element={<Insert/>}/>
                  <Route path="display" element={<Display/>} />
                  <Route path="search" element={<Search/>}/>
                  <Route path="update" element={<Update/>} />
                  <Route path="contact" element={<Contact/>}/>
                  <Route path="login" element={<Login/>}/>
                  <Route path="registration" element={<Registration/>}/>
                  <Route path="profile" element={<Profile/>}/>
                </Route>
            </Routes>
        
        </BrowserRouter>
    </>
  )
}

export default App;
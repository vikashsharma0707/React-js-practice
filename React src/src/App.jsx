
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Theme";
import Insert from "./Insert";
import Display from "./Display";
import Theme from "./Theme";
import Contact from "./Contact";

const App=()=>{
  return(
    <>

    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="to-do" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="theme" element={<Theme/>} />
        <Route path="contact" element={<Contact/>} />
        

        
        

        

        
        </Route>
      </Routes>     
    </BrowserRouter>
    </>
  )
}
export default App;

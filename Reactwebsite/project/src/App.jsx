import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";



const App=()=>{
  return(
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/"  element={<Layout/>}>     
             <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}>
                      <Route index="/" element={<About/>}/>
                      
                  <Route path="about" element={<About/>}/>
                  <Route path="contact" element={<Contact/>}/>

                  
                
            
            </Route>
            

          </Route>


       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App;


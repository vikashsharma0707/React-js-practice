import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartProduct from "./pages/CartProduct";
import SearchProduct from "./pages/SearchProduct";

const App=()=>
{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="cartproduct" element={<CartProduct/>}/>
              <Route path="searchproduct" element={<SearchProduct/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;
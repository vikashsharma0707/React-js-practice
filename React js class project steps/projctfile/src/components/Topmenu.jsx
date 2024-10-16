import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoimg from "../images/logo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Topmenu=()=>{

  const myCart= useSelector((state)=>state.mycart.cart);
  const dataLength= myCart.length;

    return(
        <>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{position:"sticky", top:0, zIndex:"1"}}>
      <Container>
        <Navbar.Brand href="#home">

        <img src={logoimg} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              
            <FaShoppingCart />
            
            <span id="tokri"> {dataLength} </span>

            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    


        </>
    )
}

export default Topmenu;

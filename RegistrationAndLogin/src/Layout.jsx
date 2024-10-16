import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CYBROM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="registration">Registration</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Outlet/>
        </>
    )
}
export default Layout;
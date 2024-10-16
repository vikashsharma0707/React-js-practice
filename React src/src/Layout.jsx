
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home |</Nav.Link>
            <Nav.Link as={Link} to="display">counter App |</Nav.Link>
            <Nav.Link as={Link} to="theme">Theme Change App |</Nav.Link>
            <Nav.Link as={Link} to="to-do">ToDo List App |</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <div className='maindiv'>
    <Outlet/>
      </div>
        </>
    )
}
export default Layout;
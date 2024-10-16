import { Link, Outlet } from "react-router-dom"



const Layout=()=>{
  return(
    <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <Link to="services">Services</Link>
    <Outlet/>
    
    </>
  )
}

export default Layout;



















// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, Outlet } from 'react-router-dom';









// const Layout=()=>{
//   return(
//   <>
  
//   <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="about">About</Nav.Link>
//             <Nav.Link as={Link} to="services">Services</Nav.Link>
//             <Nav.Link as={Link} to="placement">Placement</Nav.Link>
//             <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
//             <Nav.Link as={Link} to="contactus">Contactus</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link> <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
// z
//     <hr/>
//     <Outlet/>

  
//   </>
//   )
// }















// // import { Link, Outlet } from "react-router-dom";
// // import Button from 'react-bootstrap/Button';
// // import Container from 'react-bootstrap/Container';
// // import Form from 'react-bootstrap/Form';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// // const Layout=()=>{
// //     return(
// //         <>

// // <Navbar expand="lg" className="bg-body-tertiary">
// //       <Container fluid  style={{backgroundColor:"blue"}}>
// //         <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
// //         <Navbar.Toggle aria-controls="navbarScroll" />
// //         <Navbar.Collapse id="navbarScroll">
// //           <Nav
// //             className="me-auto my-2 my-lg-0"
// //             style={{ maxHeight: '100px', backgroundColor:"blue" }}
// //             navbarScroll
// //           >
// //             <Nav.Link as={Link} to="home">Home</Nav.Link>
// //             <Nav.Link as={Link} to="about">About</Nav.Link>
// //             <Nav.Link as={Link} to="contact">Contact</Nav.Link>
// //             <Nav.Link as={Link} to="service">Service</Nav.Link>
            
// //             <NavDropdown title="Link" id="navbarScrollingDropdown">
// //               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
// //               <NavDropdown.Item href="#action4">
// //                 Another action
// //               </NavDropdown.Item>
// //               <NavDropdown.Divider />
// //               <NavDropdown.Item href="#action5">
// //                 Something else here
// //               </NavDropdown.Item>
// //             </NavDropdown>
// //             <Nav.Link href="#" disabled>
// //               Link
// //             </Nav.Link>
// //           </Nav>
// //           <Form className="d-flex">
// //             <Form.Control
// //               type="search"
// //               placeholder="Search"
// //               className="me-2"
// //               aria-label="Search"
// //             />
// //             <Button variant="outline-success">Search</Button>
// //           </Form>
// //         </Navbar.Collapse>
// //       </Container>
// //     </Navbar>
      
// //         <hr/>
// //         <Outlet/>
        
// //         </>
// //     )
// // }
//  export default Layout;
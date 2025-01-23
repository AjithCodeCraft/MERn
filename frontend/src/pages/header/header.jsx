import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Not-Registered</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as= {Link} to='/login'>Login</Nav.Link>
            <Nav.Link as= {Link} to='/signup'>Signup</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <br />
     
    </>
  );
}

export default Header;
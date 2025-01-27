import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    // <>
    //   <Navbar bg="dark" data-bs-theme="dark">
    //     <Container>
    //       <Navbar.Brand >Not-registered</Navbar.Brand>
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to= "/login">Login</Nav.Link>
    //         <Nav.Link as={Link} to= "/signup">Signup</Nav.Link>
    //         {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    //       </Nav>
    //     </Container>
    //   </Navbar>
    //   <br />
     
    // </>


    <>
      <Navbar bg={token ? "primary" : "dark"} variant='dark'>
      <Container>
          <Navbar.Brand as={Link} to="">
            {token ? "Logged-In" : "Not-LoggedIn"}
          </Navbar.Brand>
          <Nav className="ml-auto">
            {token ? (
              <>
                            <Nav.Link as={Link} to="/dashboard" className='nav-link'>Dashboard</Nav.Link>
                            <Nav.Link className='nav-link' onClick={handleLogout}>Logout</Nav.Link>

              </>
            ) : (
              <>
                            <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
                            <Nav.Link as={Link} to="/register" className='nav-link'>SignUp</Nav.Link>

              </>
            )}

          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default Header;
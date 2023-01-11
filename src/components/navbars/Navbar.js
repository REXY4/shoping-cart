import "../../styles/components/navbars.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from "../../assets/icon/Cart.svg";
import { Image } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';


function NavbarBasic({cart}) {
  return (
    <Navbar 
    expand="lg" 
    variant="dark"
    className="main-nav">
      <Container>
        <Navbar.Brand href="/">Shoping Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">
              <div>
              <Badge bg="light" text="dark" style={{
                borderRadius : "50%",
                fontSize : "8px",
                position : "absolute",
                marginLeft : "17px",
                marginTop: "-5px"
              }}>
              {cart && (cart) }
              </Badge>{' '}
                <Image src={Cart} color="white" width={24} height={24}/>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBasic;
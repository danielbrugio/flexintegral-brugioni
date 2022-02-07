import "./NavBar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { CartIcon } from "../CartIcon/CartIcon";

const NavBar = () => {
  return (
    <Navbar className="navBar" expand="sm">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Samsung" className="logo" />
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBar__list">
            <Nav.Link className="links" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="links" href="#notebooks">
              Notebooks
            </Nav.Link>
            <Nav.Link className="links" href="#smartphones">
              Smartphones
            </Nav.Link>
            <Nav.Link className="links" href="#tablets">
              Tablets
            </Nav.Link>
            <Nav.Link className="links" href="#tv">
              TV
            </Nav.Link>
            <Nav.Link className="links" href="#itemlistcontainer">
              <CartIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
